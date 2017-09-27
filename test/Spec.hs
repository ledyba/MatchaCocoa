import Test.Hspec
import Test.QuickCheck
import Control.Exception (evaluate)
import MatchaCocoa.Trie (Node(..), build, match)

main :: IO ()
main = hspec $ do
  describe "trie" $ do
    it "returns empty node" $ do
      let t = build ["k", "ab", "c"]
      putStrLn (show t)
      match t "ab" `shouldBe` True
