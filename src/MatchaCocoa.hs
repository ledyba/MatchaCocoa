module MatchaCocoa
    (CompileTarget(..), compile) where

data CompileTarget = PHP | JS

compile :: CompileTarget -> [String] -> String
compile = undefined
