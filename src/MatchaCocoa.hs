module MatchaCocoa
    (CompileTarget(..), compile) where

import Prelude hiding (words)
import MatchaCocoa.Trie(Node(..), build, partialMatch, Payload(..))
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
    "  const length = orig_str.length;",
    "  let str = new Array(length);",
    "  for(let i=0;i < length;i++) {",
    "    str[i] = orig_str.charCodeAt(i);",
    "  }",
    "  for(let pos = 0; pos < length; pos++) {"]
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
                makeCond i chr = "str[pos+"++(show i)++"] === " ++ (show $ ord chr)
                
compile Regex words = compile' (build words)
    where
        compile' (EndNode _) = ""
        compile' (Node nodes _) = "(?:"++(intercalate "|" (fmap compileNodes nodes))++")"
            where
                compileNodes (str, node) = str ++ (compile' node)

data StateMachine = StateMachine Node [(Int, String, [(String, Int)])] deriving (Show, Eq)
makeStateMachine :: Node -> StateMachine
makeStateMachine node = StateMachine node (flatNode node)

flatNode :: Node -> [(Int, String, [(String, Int)])]
flatNode = flatNode' ""

flatNode' :: String -> Node -> [(Int, String, [(String, Int)])]
flatNode' acc node@(Node nodes (Payload state)) = (state, acc, enumCond node):(nodes >>= enumNode)
    where
      enumNode :: (String, Node) -> [(Int, String, [(String, Int)])]
      enumNode (_, (EndNode _)) = []
      enumNode (str, n@(Node _ _)) = flatNode' (acc ++ str) n
      enumCond :: Node -> [(String, Int)]
      enumCond (Node nodes' (Payload _)) = fmap enumNexts nodes'
        where
            enumNexts (str, (EndNode _)) = (str, -1)
            enumNexts (str, (Node _ (Payload next))) = (str, next)
            
join :: String -> [String] -> String
join indent xs = intercalate "\n" (fmap (indent++) xs)

compileSM2JS :: StateMachine -> String
compileSM2JS (StateMachine pnode conditions) = join "" ([
    "function(orig_str) {",
    "  const length = orig_str.length;",
    "  let state = 0;",
    "  let pos = 0;",
    "  let cur = 0;",
    "  let str = new Array(length);",
    "  for(let i=0;i<length;i++) {",
    "    str[i] = orig_str.charCodeAt(i);",
    "  }",
    "  while(pos < length) switch(state) {"] ++
    (conditions >>= (compileCond "    ")) ++
    ["    default: throw new Exception('Unknown state: '+state);",
    "  }",
    "  return false;",
    "}"])
    where
        compileCond :: String -> (Int, String, [(String, Int)]) -> [String]
        compileCond indent (state, substr, nexts) = fmap (indent++) (
            ["case "++(show state)++": // [" ++ substr ++ "]"] ++
            (nexts >>= \(str, next) -> fmap ("  "++) $ compileNext str next)++
            ["  pos += "++ (show $ calcNext substr) ++"; cur = pos; continue;"])
        calcNext :: String -> Int
        calcNext [] = 1
        calcNext (_:xs) = if partialMatch pnode xs then 1 else calcNext' 2 xs
        calcNext' :: Int -> String -> Int
        calcNext' cnt [] = cnt
        calcNext' cnt (_:xs) = if partialMatch pnode xs then cnt else calcNext' (1+cnt) xs
        compileNext :: String -> Int -> [String]
        compileNext "" next | next <= 0 = ["return true;"];
        compileNext str next =
            if next > 0 then [
              "if("++conds++") {",
              "  state = "++(show next)++";",
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
