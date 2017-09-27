module MatchaCocoa
    (CompileTarget(..), compile) where

import MatchaCocoa.Trie(Node(..), build, Payload(..))

data CompileTarget = PHP | JS

compile :: CompileTarget -> [String] -> String
compile target words = show trie
    where
        (trie,_) = setSym (build words) 0

setSym :: Node -> Int -> (Node, Int)
setSym (Node nodes _) zero = (Node nodes' (Payload zero), next)
        where
            (nodes', next) = setNumber' [] nodes (zero+1)
            setNumber' :: [(String, Node)] -> [(String, Node)] -> Int -> ([(String, Node)], Int)
            setNumber' acc [] s = (reverse acc, s)
            setNumber' acc ((str, Node nodes' _):xs) s = setNumber' ((str, Node nodes' (Payload s)):acc) xs (s+1)
            setNumber' acc ((str, EndNode _):xs) s = setNumber' ((str, EndNode (Payload s)):acc) xs (s+1)