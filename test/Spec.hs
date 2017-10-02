import Test.Hspec
import Test.QuickCheck
import Control.Exception (evaluate)
import MatchaCocoa.Trie (Node(..), Payload(..), build, match)

main :: IO ()
main = hspec $ do
  describe "trie" $ do
    it "returns empty node" $ do
      let t = build ["k", "ab"]
      t `shouldBe` (Node [("ab",EndNode (Payload 0)),("k",EndNode (Payload 0))] (Payload 0))
      let t = build ["c", "k", "ab"]
      t `shouldBe` (Node [("ab",EndNode (Payload 0)),("c",EndNode (Payload 0)),("k",EndNode (Payload 0))] (Payload 0))
      match t "ab" `shouldBe` True
