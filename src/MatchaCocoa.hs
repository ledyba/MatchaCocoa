module MatchaCocoa
    (CompileTarget(..), compile) where

import Prelude hiding (words)
import MatchaCocoa.Trie(Node(..), build, Payload(..))
import Data.List (intercalate)
import Data.Char (ord)

data CompileTarget = JS_StateMachine | JS_Naive | Regex

compile :: CompileTarget -> [String] -> String
compile JS_StateMachine words = compileSM2JS sm
    where
        (trie,_) = setSym (build words) 0
        sm = makeStateMachine trie

compile JS_Naive words = join "" $ [
    "function(orig_str){",
    "  let str = new Array(orig_str.length);",
    "  for(let i=0;i<orig_str.length;i++) {",
    "    str[i] = orig_str.charCodeAt(i);",
    "  }",
    "  for(let pos = 0; pos < str.length; pos++) {"]
    ++ body ++ [
    "  }",
    "  return false;",
    "}"]
    where
        body :: [String]
        body = compile' "    " 0 (build words)
        compile' :: String -> Int -> Node -> [String]
        compile' _ _ (EndNode _) = error "[BUG] Do not call compile' on EndNode."
        compile' indent idx (Node nodes _) = (nodes >>= compileNodes) ++ 
            [indent ++ "continue;"]
            where
                compileNodes :: (String, Node) -> [String]
                compileNodes ("", EndNode _) = [indent ++ "return true;"]
                compileNodes (str, EndNode _) = [indent ++ "if("++(intercalate " && " (zipWith makeCond [idx..] str))++") return true;"]
                compileNodes (str, node@(Node _ _)) = [
                     indent ++ "if("++(intercalate " && " (zipWith makeCond [idx..] str))++") {"] ++
                    (compile' (indent ++ "  ") (idx + length str) node) ++ 
                    [indent ++ "}"]
                makeCond :: Int -> Char -> String
                makeCond 0 chr = "str[pos] === " ++ (show $ ord chr)
                makeCond i chr = "str[pos + "++(show i)++"] === " ++ (show $ ord chr)
                
compile Regex words = compile' (build words)
    where
        compile' (EndNode _) = ""
        compile' (Node nodes _) = "(?:"++(intercalate "|" (fmap compileNodes nodes))++")"
            where
                compileNodes (str, node) = str ++ (compile' node)

data StateMachine = StateMachine [(Int, [(String, Int)])] deriving (Show, Eq)
makeStateMachine :: Node -> StateMachine
makeStateMachine node = StateMachine (flatNode node)

flatNode :: Node -> [(Int, [(String, Int)])]
flatNode node@(Node nodes (Payload state)) = (state, enumCond node):(nodes >>= enumNode)
    where
      enumNode :: (String, Node) -> [(Int, [(String, Int)])]
      enumNode (_, (EndNode _)) = []
      enumNode (_, n@(Node _ _)) = flatNode n
      enumCond :: Node -> [(String, Int)]
      enumCond (Node nodes' (Payload _)) = fmap enumNexts nodes'
        where
            enumNexts (str, (EndNode _)) = (str, -1)
            enumNexts (str, (Node _ (Payload next))) = (str, next)
            
join :: String -> [String] -> String
join indent xs = intercalate "\n" (fmap (indent++) xs)

compileSM2JS :: StateMachine -> String
compileSM2JS (StateMachine conditions) = join "" ([
    "function(orig_str) {",
    "  let state = 0;",
    "  let pos = 0;",
    "  let cur = 0;",
    "  let str = new Array(orig_str.length);",
    "  for(let i=0;i<orig_str.length;i++) {",
    "    str[i] = orig_str.charCodeAt(i);",
    "  }",
    "  for(;pos < str.length;) switch(state) {"] ++
    (conditions >>= (compileCond "    ")) ++
    ["    default: throw new Exception('Unknown state: '+state);",
    "  }",
    "  return false;",
    "}"])
    where
        compileCond :: String -> (Int, [(String, Int)]) -> [String]
        compileCond indent (state, nexts) = fmap (indent++) (
            ["case "++(show state)++":"] ++
            (nexts >>= \(str, next) -> fmap ("  "++) $ compileNext str next)++
            ["  pos++; cur = pos; continue;"])
        compileNext :: String -> Int -> [String]
        compileNext "" next | next <= 0 = ["return true;"];
        compileNext str next =
            if next > 0 then [
              "if("++conds++") {",
              "  state="++(show next)++";",
              "  cur += "++(show $ length str)++";",
              "  continue;",
              "}"]
            else ["if("++conds++") return true;"]
            where
                conds = intercalate " && " (zipWith makeCond [0..] str)
                makeCond :: Int -> Char -> String
                makeCond 0 chr = "str[cur] === " ++ (show $ ord chr)
                makeCond idx chr = "str[cur+"++(show idx)++"] === " ++ (show $ ord chr)

setSym :: Node -> Int -> (Node, Int)
setSym (EndNode _) zero = (EndNode (Payload (-1)), zero)
setSym (Node nodes _) zero = (Node nodes' (Payload zero), next)
        where
            (nodes', next) = setNumber' [] nodes (zero+1)
            setNumber' :: [(String, Node)] -> [(String, Node)] -> Int -> ([(String, Node)], Int)
            setNumber' acc [] s = (reverse acc, s)
            setNumber' acc ((str, node):xs) s = setNumber' ((str, node'):acc) xs s'
                where (node', s') = setSym node s
