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
function(str) {
  let state = 0;
  let pos = 0;
  let cur = 0;
  for(;pos < str.length;) switch(state) {
    case 0:
      if(str.startsWith('フシギ', cur)) {
        state=1;
        cur += 3;
        continue;
      }
      pos++; cur = pos; continue;
    case 1:
      if(str.startsWith('ソウ', cur)) return true;
      if(str.startsWith('ダネ', cur)) return true;
      if(str.startsWith('バナ', cur)) return true;
      pos++; cur = pos; continue;
    default: throw new Exception('Unknown state: '+state);
  }
  return false;
}
```

```js
// % stack exec matcha-cocoa js-naive simple.txt
/* Naive Native Code */
function(str){
  for(let pos = 0; pos < str.length; pos++) {
    if((
      (str.startsWith('フシギ', pos + 0) &&
        ((str.startsWith('ソウ', pos + 3) && true) ||
        (str.startsWith('ダネ', pos + 3) && true) ||
        (str.startsWith('バナ', pos + 3) && true))))) {
          return true;
    }
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
method=Normal              , time=      1811ms, matches=20000(/100000)
method=Regex               , time=       172ms, matches=20000(/100000)
method=Naive Native Code   , time=      1124ms, matches=20000(/100000)
method=Native StateMachine , time=       523ms, matches=20000(/100000)
```