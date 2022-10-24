# JavaScriptとは

## JavaScriptとECMAScript
- JavaScriptはECMAScriptの仕様によって動作が決定されている.

## JavaScriptってどのような言語?
- 大部分がオブジェクト
- 大文字と小文字を区別する
- 文はセミコロンで区切られる
  - セミコロンがなくても行末に自動挿入されるが、暗黙的仕組みに頼るべきではない
- strict mode
  - ファイルの先頭に `use strict`
  - レガシーな機能・構文を禁止（eval/with）
  - 常に使うことを推奨
- 実行コンテキストにはScriptとModuleがある
  - ECMAScriptモジュール
