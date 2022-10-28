# データ型とリテラル

## データ型
- 動的型付け言語
- イミュータブルなものはプリミティブ型
- ミュータブルなものはオブジェクト型

### プリミティブ型
- boolean
- number
- bigint (from ES2020)
- string
- undefined: 値が未定義であることを意味する
- null: 値が存在しないことを意味する
- symbol: 一意で不変な値 (from ES2015)

### オブジェクト型
- プリミティブ型以外
- オブジェクト
- 配列
- 関数
- クラス
- 正規表現
- Date
- etc...

## typeof演算子
- プリミティブ型 or object を返す

## リテラル
- boolean: true / false
- number:
  - 整数:
    - 10進数: 0 / 3
    - 2進数: 0b0 / 0b10
    - 8進数: 0o644
    - 16進数: 0x30A2
  - 浮動小数点: 3.14 / 2e8 / 3E4
  - 最大値: Number.MAX_SAFE_INTEGER = 2^53-1
  - 内部的には浮動小数点で扱われている
  - NaN / Number.isNaN
- bigint: 1n
- string: "" / ''
  - "" と '' に違いはない
  - テンプレートリテラル: ``
    - ${変数名}で値の埋め込みができる
- null: null

## BigInt [from ES2020]
- 最大値のない値

## Numeric Separators [from ES2021]
- 1_000_000_000

## undefinedはリテラルではない
- undefinedはグローバル変数
  - undefinedというローカル変数を宣言することもできる
    - 無用な混乱を生むだけなので非推奨
``` javascript
function fn() {
    const undefined = "独自の未定義値";
    console.log(undefined);
}
```

## オブジェクトリテラル
- JavaScriptにおける基礎
- 宣言
  - `const obj = {};`
  - `const obj = { "key": "value" };`
- 参照
  - `console.log(obj.key);`
  - `console.log(obj["key"]);`
  - .記法は識別子として使えないプロパティ名には使えない
    - OK: `object["123"]`
    - NG: `object.123`

## 配列リテラル
- Arrayオブジェクト
- 宣言
  - `[]`
  - `[1, 2, 3]`
- 参照
  - `array[0]`

## 正規表現リテラル
- `/\d+/`

## ラッパーオブジェクト
- new演算子と対応するコンストラクタで生成
- プリミティブ型でもプロパティにアクセスする際に、暗黙的にラッパーオブジェクトに変換する
- 特に使う理由はない