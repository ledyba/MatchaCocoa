module MatchaCocoa.Trie (
  Node(..),
  buildTrie
) where

data Node = Node [(String, Node)] | EndNode deriving (Eq, Show)

emptyTrie :: Node
emptyTrie = Node []

buildTrie :: [String] -> Node
buildTrie = foldl appendWord emptyTrie

prefixLen' :: String -> String -> String -> (String, String, String)
prefixLen' cs [] ys = (cs, [], ys)
prefixLen' cs xs [] = (cs, xs, [])
prefixLen' cs (x:xs) (y:ys) = if x == y then (prefixLen' (x:cs) xs ys)
                                        else (reverse cs, x:xs, y:ys)

prefixLen :: String -> String -> (String, String, String)
prefixLen xs ys = prefixLen' [] xs ys

appendWord :: Node -> String -> Node
appendWord (Node nodes) word = Node (append nodes)
  where
    append :: [(String,Node)] -> [(String,Node)]
    append [] = [(word, EndNode)]
    append (c@(cstr, cnode):leftNodes) =
          case prefixLen cstr word of
            ([], [], []) -> c:leftNodes
            ([], _, _) -> (c:(append leftNodes))
            (_, [], []) -> c:leftNodes
            (commonStr, [], leftWord) -> case cnode of
              Node _ -> (commonStr, appendWord cnode leftWord):leftNodes
              EndNode -> (commonStr, Node [("", EndNode), (leftWord, EndNode)]):leftNodes
            (commonStr, leftStr, leftWord) ->
              if leftWord < leftStr then (commonStr, Node [(leftWord, EndNode),(leftStr, cnode)]):leftNodes
                                    else (commonStr, Node [(leftStr, cnode),(leftWord, EndNode)]):leftNodes

appendWord EndNode word = error "[BUG] appendWord' called by EndNode"