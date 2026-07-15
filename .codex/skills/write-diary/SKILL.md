---
name: write-diary
description: 日記エントリをAllDiarySummary.tsへ追加し、対応するMarkdownファイルと画像フォルダを作成する。新しい日記を追加するときに使う。
---

# 日記作成

## 情報収集

- 必須: `title`
- 任意: `date`（未指定なら今日、yyyymmdd形式）、`thumbnail`（既定値 `/diarySam/nikki.png`）、`tags`（既定値 `['制作']`）
- 引数は `date title [thumbnail] [tags...]` の順で扱う。タイトルがなければ質問する。

## 手順

1. AllDiarySummary.tsを読み、同じ日付から始まるIDの件数を数える。
2. IDを`{date}`とゼロ埋め2桁の連番で作る。最初は`01`とする。
3. AllDiarySummary.tsの配列先頭へ次を追加する。

```ts
{
    id: {id},
    title: '{title}',
    thumbnail: '{thumbnail}',
    date: '{yyyy-mm-dd}',
    tags: {tags},
},
```

4. `{id}.md`が存在しない場合だけ、次の内容で作成する。

```md
---
layout: '../../layouts/DiaryLayout.astro'
title: '{title}'
---
# {title}

（ここに本文を書く）
```

5. 対応する画像フォルダがなければ作成する。
