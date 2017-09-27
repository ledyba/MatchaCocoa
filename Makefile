.PHONY: all run test bench

all:
	stack build

run: all
	stack exec matcha-cocoa js words.txt > words.js

test:
	stack test

bench:
	cd bench && node bench.js