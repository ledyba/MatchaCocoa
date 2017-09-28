.PHONY: all gen test bench

all:
	stack build

gen: all
	bash gen-bench.sh

test:
	stack test

bench:
	cd bench && node bench.js