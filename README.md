# Matcha Cocoa

ワードの一覧にマッチするjsのプログラムと、regexを生成するプログラムです。

A compiler to generate words matcher for js and regex.

## How to use
```sh
% stack build
% stack exec matcha-cocoa <compile-target> words.txt > words.js
```

## Sample

```sh
% cat simple.txt
フシギダネ
フシギソウ
フシギバナ
```

```sh
% stack exec matcha-cocoa regex simple.txt
(?:フシギ(?:ソウ|ダネ|バナ))
```

```js
// % stack exec matcha-cocoa js-statemachine simple.txt
/* Native State Machine */
function(orig_str) {
  const length = orig_str.length;
  let state = 0;
  let pos = 0;
  let cur = 0;
  let str = new Array(length);
  for(let i=0;i<length;i++) {
    str[i] = orig_str.charCodeAt(i);
  }
  while(pos < length) switch(state) {
    case 0: // []
      if(str[cur] === 12501 && str[cur+1] === 12471 && str[cur+2] === 12462) { // [フシギ]
        state = 1;
        cur += 3;
        continue;
      }
      pos += 1; cur = pos; state = 0; continue;
    case 1: // [フシギ]
      if(str[cur] === 12477 && str[cur+1] === 12454) return true; // [フシギソウ]
      if(str[cur] === 12480 && str[cur+1] === 12493) return true; // [フシギダネ]
      if(str[cur] === 12496 && str[cur+1] === 12490) return true; // [フシギバナ]
      pos += 3; cur = pos; state = 0; continue;
    default: throw new Exception('Unknown state: '+state);
  }
  return false;
}
```

```js
// % stack exec matcha-cocoa js-naive simple.txt
/* Naive Native Code */
function(orig_str){
  const length = orig_str.length;
  let str = new Array(length);
  for(let i=0;i < length;i++) {
    str[i] = orig_str.charCodeAt(i);
  }
  let pos = 0;
  while(pos < length) {
    if(str[pos] === 12501 && str[pos+1] === 12471 && str[pos+2] === 12462) { // [フシギ]
      if(str[pos+3] === 12477 && str[pos+4] === 12454) return true; // [フシギソウ]
      if(str[pos+3] === 12480 && str[pos+4] === 12493) return true; // [フシギダネ]
      if(str[pos+3] === 12496 && str[pos+4] === 12490) return true; // [フシギバナ]
      pos+=3; continue;
    }
    pos+=1; continue;
  }
  return false;
}
```

## 名前の由来

Matcher、ときたら、鬼畜和菓子、鬼畜和菓子とくれば、ココアさん。つまり抹茶ココアです。（理解できなくてもいいよ！）

# Benchmark

## JS

See: [./bench](./bench) directory.

```sh
% cd bench && node bench.js
method=Normal              , time=     26.42μs/op, matches=20%
method=Regex               , time=      2.70μs/op, matches=20%
method=Naive Native Code   , time=     14.90μs/op, matches=20%
method=Native StateMachine , time=     15.13μs/op, matches=20%
```