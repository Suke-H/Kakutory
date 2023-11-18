# 人工知能とは

:::message
G検定の勉強記録です。
:::

## 人工知能の定義
人工知能や機械学習の定義を理解する 

-  人工知能とは何か
-  人工知能のおおまかな分類
-  AI効果
-  人工知能とロボットの違い

キーワード：推論、認識、判断、エージェント、古典的な人工知能、機械学習、ディープラーニング

```js
import fs from 'fs';
import lib from "zenn-markdown-html";
const markdownToHtml = lib.default ? lib.default : lib;

// Markdown ファイルの読み込み
const markdown = fs.readFileSync('src/example.md', 'utf8');

// Markdown を HTML に変換
const html = markdownToHtml(markdown);

// HTML をファイルに書き出し
fs.writeFileSync('src/example.html', html);
```