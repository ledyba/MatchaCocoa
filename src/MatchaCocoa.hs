module MatchaCocoa
    (CompileTarget(..), compile) where

import Prelude hiding (words)
import MatchaCocoa.Trie(Node(..), build, Payload(..))
import Data.List (intercalate)

data CompileTarget = PHP | JS | REGEX

compile :: CompileTarget -> [String] -> String
compile JS words = compileSM JS sm
    where
        (trie,_) = setSym (build words) 0
        sm = makeStateMachine trie

compile REGEX words = compile' (build words)
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

compileSM :: CompileTarget -> StateMachine -> String
compileSM JS (StateMachine conditions) = join "" ([
    "function(str) {",
    "  let state = 0;",
    "  let pos = 0;",
    "  let cur = 0;",
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
        compileNext str next =
            if next > 0 then [
              "if(str.startsWith('"++str++"', cur)) {",
              "  state="++(show next)++";",
              "  cur += "++(show $ length str)++";",
              "  continue;",
              "}"]
            else ["if(str.startsWith('"++str++"', cur)) return true;"]
compileSM _ _ = error "NotImplemented"

setSym :: Node -> Int -> (Node, Int)
setSym (EndNode _) zero = (EndNode (Payload (-1)), zero)
setSym (Node nodes _) zero = (Node nodes' (Payload zero), next)
        where
            (nodes', next) = setNumber' [] nodes (zero+1)
            setNumber' :: [(String, Node)] -> [(String, Node)] -> Int -> ([(String, Node)], Int)
            setNumber' acc [] s = (reverse acc, s)
            setNumber' acc ((str, node):xs) s = setNumber' ((str, node'):acc) xs s'
                where (node', s') = setSym node s
