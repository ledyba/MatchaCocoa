import Test.Hspec
import Test.QuickCheck
import Control.Exception (evaluate)
import MatchaCocoa.Trie (Node(..), buildTrie)

main :: IO ()
main = hspec $ do
  describe "trie" $ do
    it "returns empty node" $ do
      let t = buildTrie ["a", "ab", "c"]
      putStrLn (show t)
