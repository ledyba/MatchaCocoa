module MatchaCocoa.Trie (
  Node(..),
  Payload(..),
  build,
  match,
  partialMatch
) where


data Payload = Payload Int deriving (Eq, Show)
data Node = Node [(String, Node)] Payload
          | EndNode Payload deriving (Eq, Show)

emptyPayload :: Payload
emptyPayload = Payload 0

emptyTrie :: Node
emptyTrie = Node [] emptyPayload

build :: [String] -> Node
build = foldl appendWord emptyTrie

partialMatch :: Node -> String -> Bool
partialMatch (EndNode _) _ = True
partialMatch (Node nodes _) word = match' nodes
  where
    match' :: [(String,Node)] -> Bool
    match' [] = False
    match' ((str, node):xs) =
      case prefixLen str word of
        (_, _, []) -> True
        ([], [], _) -> True
        ([], _, _) -> match' xs
        (_, [], left) -> match node left
        (_, _, _) -> False

match :: Node -> String -> Bool
match (EndNode _) [] = True
match (EndNode _) _ = False

match (Node nodes _) word = match' nodes
  where
    match' :: [(String,Node)] -> Bool
    match' [] = False
    match' ((str, node):xs) =
      case prefixLen str word of
        ([], [], []) -> match node []
        ([], _, _) -> match' xs
        (_, [], left) -> match node left
        (_, _, _) -> False

prefixLen' :: String -> String -> String -> (String, String, String)
prefixLen' cs [] ys = (reverse cs, [], ys)
prefixLen' cs xs [] = (reverse cs, xs, [])
prefixLen' cs (x:xs) (y:ys) = if x == y then (prefixLen' (x:cs) xs ys)
                                        else (reverse cs, x:xs, y:ys)

prefixLen :: String -> String -> (String, String, String)
prefixLen xs ys = prefixLen' [] xs ys

appendWord :: Node -> String -> Node
appendWord (Node nodes p) word = Node (append nodes) p
  where
    -- TODO: Tail Recursive.
    append :: [(String,Node)] -> [(String,Node)]
    append [] = [(word, EndNode emptyPayload)]
    append (c@(cstr, cnode):leftNodes) =
          case prefixLen cstr word of
            ([], [], []) -> c:leftNodes -- Matches. the same empty word.
            ([], _, _) -> (c:(append leftNodes)) -- Not matched. Try next.
            (_, [], []) -> c:leftNodes -- Matches. the same word.
            (commonStr, [], leftWord) -> case cnode of
              Node _ _-> (commonStr, appendWord cnode leftWord):leftNodes
              EndNode p1 -> (commonStr, Node [("", EndNode p1), (leftWord, EndNode emptyPayload)] emptyPayload):leftNodes
            (commonStr, leftStr, leftWord) ->
              if leftWord < leftStr then (commonStr, Node [(leftWord, EndNode emptyPayload),(leftStr, cnode)] emptyPayload):leftNodes
                                    else (commonStr, Node [(leftStr, cnode),(leftWord, EndNode emptyPayload)] emptyPayload):leftNodes

appendWord (EndNode _) _ = error "[BUG] appendWord' called by EndNode"