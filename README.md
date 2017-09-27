# Matcha Cocoa

ワードの一覧にマッチするjs(とphp)のプログラムを生成するプログラムです。

A compiler to generate words matcher program for JS (and PHP).

## How to use
```sh
% stack build
% stack exec matcha-cocoa js words.txt > words.js
```

## 名前の由来

Matcher、ときたら、鬼畜和菓子、鬼畜和菓子とくれば、ココアさん。つまり抹茶ココアです。（理解できなくてもいいよ！）

# Benchmark

## JS

See: [./bench](./bench) directory.

```sh
% cd bench && node bench.js
[Normal] Time: 1703ms, matches: 20000 / 100000
[Regex] Time: 155ms, matches: 20000 / 100000
[State Machine] Time: 19981ms, matches: 20000 / 100000
```