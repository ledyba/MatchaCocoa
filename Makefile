.PHONY: all run test

all:
	stack build

run: all
	stack exec matcha-cocoa js words.txt > words.js

test:
	stack test
