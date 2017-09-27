module Main where

import Data.String.Utils (strip, startswith)
import System.Environment (getArgs)
import MatchaCocoa(compile, CompileTarget(..))
import System.IO (hPutStrLn, stderr)

main = do
    args <- getArgs
    case args of
      "js":left -> compileIO JS left
      "php":left -> compileIO PHP left
      _ -> hPutStrLn stderr "matcha-cocoa (js|php) files..."
    

compileIO :: CompileTarget -> [String] -> IO ()
compileIO PHP files = hPutStrLn stderr "Not Implemented for PHP"
compileIO JS files = do
  wordsRaw <- mapM (\fname -> fmap lines (readFile fname)) files
  let words = (concat wordsRaw) >>= filterComment
  putStrLn (compile JS words)

filterComment line =
         if stripped `startswith` "#" then []
    else if stripped == "" then []
    else [stripped]
  where
    stripped = (strip line)