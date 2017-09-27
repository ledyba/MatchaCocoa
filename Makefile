.PHONY: all run test

all:
	stack build

run:
	stack exec matcha-cocoa

test:
	stack test
