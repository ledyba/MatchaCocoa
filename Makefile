.PHONY: all run test bench

all:
	stack build

run: all
	stack exec matcha-cocoa js-statemachine words.txt

test:
	stack test

bench:
	cd bench && node bench.js