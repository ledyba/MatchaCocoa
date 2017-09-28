module Main where

import Prelude hiding (words)
import Data.String.Utils (strip, startswith)
import System.Environment (getArgs)
import MatchaCocoa(compile, CompileTarget(..))
import System.IO (hPutStrLn, stderr)

usage :: IO ()
usage = do
  hPutStrLn stderr "% stack exec matcha-cocoa <target> files..."
  hPutStrLn stderr "[targets]"
  hPutStrLn stderr "  js-naive:        converted to js AST directly"
  hPutStrLn stderr "  js-statemachine: converted to state machine."
  hPutStrLn stderr "  regex:           converted to Regular Expression."

main :: IO ()
main = do
  hPutStrLn stderr " *** matcha-cocoa ***"
  args <- getArgs
  if length args < 1
    then usage
      else do
      let (target:files) = args
      case target of
        "js-statemachine" -> contWithTarget JS_StateMachine files
        "js-naive" -> contWithTarget JS_Naive files
        "regex" -> contWithTarget Regex files
        _ -> do
          hPutStrLn stderr $ "[ERROR] Not Implemented target: " ++ target
          usage
      where
        contWithTarget target files = do
          words <- readWords files
          putStrLn (compile target words)
          hPutStrLn stderr "Done."


--
readWords :: [String] -> IO [String]
readWords files =  do
    wordsRaw <- mapM (\fname -> fmap lines (readFile fname)) files
    return $ (concat wordsRaw) >>= filterComment
    where
      filterComment line = if startswith "#" stripped then []
                           else if stripped == "" then []
                           else [stripped]
        where
          stripped = (strip line)
