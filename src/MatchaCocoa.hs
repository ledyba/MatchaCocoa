module MatchaCocoa
    (CompileTarget(..), compile) where

import MatchaCocoa.Trie(Node(..), build, Payload(..))
import Data.List (intercalate)

data CompileTarget = PHP | JS

compile :: CompileTarget -> [String] -> String
compile target words = compileSM target sm
    where
        (trie,_) = setSym (build words) 0
        sm = makeStateMachine trie

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
    "  let cur = str;",
    "  for(;str.length > 0;) switch(state) {"] ++
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
            ["  str = str.slice(1); cur = str; continue;"])
        compileNext :: String -> Int -> [String]
        compileNext str next =
            if next > 0 then [
              "if(cur.startsWith('"++str++"')) {",
              "  state="++(show next)++";",
              "  cur = cur.slice("++(show $ length str)++");",
              "  continue;",
              "}"]
            else ["if(cur.startsWith('"++str++"')) return true;"]
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
