.PHONY: all run test

all:
	stack build

run:
	stack exec MatchaCocoa

test:
	stack test
