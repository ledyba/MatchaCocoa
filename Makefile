.PHONY: all sm naive regex test bench

all:
	stack build

sm: all
	stack exec matcha-cocoa js-statemachine words.txt

naive: all
	stack exec matcha-cocoa js-naive words.txt

regex: all
	stack exec matcha-cocoa regex words.txt

test:
	stack test

bench:
	cd bench && node bench.js