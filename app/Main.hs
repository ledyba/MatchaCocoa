module Main where

import Prelude hiding (words)
import Data.String.Utils (strip, startswith)
import System.Environment (getArgs)
import MatchaCocoa(compile, CompileTarget(..))
import System.IO (hPutStrLn, stderr)

main :: IO ()
main = do
    args <- getArgs
    if length args < 1
      then hPutStrLn stderr "matcha-cocoa (js|php) files..."
      else do
        let (target:files) = args
        words <- readWords files
        case target of
          "js" -> putStrLn (compile JS words)
          "regex" -> putStrLn (compile REGEX words)
          "php" -> hPutStrLn stderr "Not Implemented for PHP"


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
