---
name: add-work
description: Work.tsxへ新しい作品の記入欄と画像フォルダを追加する。作品タイトルだけを受け取り、詳細と画像をユーザーが後から用意できる状態にするときに使う。
---

# Work追加

作品タイトルだけを受け取ります。

タイトルがある場合は、Work.tsxを確認して重複がないことを確認し、タイトルから英小文字とハイフンのslugを作ります。日本語の場合は短いローマ字へ変換します。

`src/assets/work/{識別子}`を画像置き場として作成し、空フォルダを保持する`.gitkeep`を置きます。Work.tsxの`works`配列先頭へ、タイトルだけ入力済みのコメントアウトされた記入欄を追加します。

```tsx
// 作品情報と画像importを追加したらコメントを外す
/*
{
  url: '',
  imageUrls: [],
  title: '{タイトル}',
  tags: [],
  date: '',
  overview: '',
  technology: '',
  infrastructure: '',
  otherTechnologies: '',
  github: '',
  articles: [],
  description: '',
},
*/
```

実装や検証は行わず、次の2行だけ案内して終了します。

```text
Work.tsxの「{タイトル}」の欄へ作品情報を書いてください。
画像は{識別子}フォルダへ、カード画像を1.png、以降を2.png、3.pngの順で入れてください。
```
