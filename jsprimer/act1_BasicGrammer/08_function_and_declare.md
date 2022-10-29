# 関数と宣言

- return文を書かなかった場合、undefinedを返す
- 仮引数より少ない引数が渡された場合、残りの引数にundefinedが入る
- 仮引数より多い引数が渡された場合、あまりの引数は無視される
- 可変長引数はarguments関数というArray-likeなオブジェクトの中で利用できる
  - Rest parametersが使えるならそっちの方がベター
- javascriptの関数は第一級関数なので、オブジェクトとして扱うことができる
- functionキーワードとArrow Functionではthisの挙動が異なる
- 同じ関数名の関数宣言は上書きされる
  - シグネチャが異なっていても関数名が同じであれば上書きされる



## デフォルト引数 [from ES2015]
## Rest parameters [from ES2015]
## Spread構文 [from ES2015]
## 関数の引数への分割代入 [from ES2015]
## Arrow Function [from ES2015]
## メソッド
``` javascript
{
    method1: function() {}
}

const obj = {};
obj.method = function() {}
```
## メソッドの短縮記法 [from ES2015]
``` javascript
{
    method() {}
}
```
