module Main where

import MatchaCocoa(compile, CompileTarget(..))

main :: IO ()
main = putStrLn (compile JS ["hoge"])
