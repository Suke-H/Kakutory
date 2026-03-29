日記エントリを `AllDiarySummary.ts` に追加し、対応する `.md` ファイルを作成するスキルです。

## 手順

### 1. 情報収集

`$ARGUMENTS` を確認し、以下の情報を収集してください。

**必須項目（引数がなければ対話的に質問）：**
- `title` : 日記タイトル

**任意項目（未指定なら以下のデフォルトを使用）：**
- `date` : 日付（`yyyymmdd` 形式、例: `20260310`）。渡されなければ今日の日付にする
- `thumbnail` : `/diarySam/nikki.png`
- `tags` : `['制作']`

引数が渡された場合は `date title [thumbnail] [tags...]` の順とします。

### 2. id を自動生成

`src/components/contents/AllDiarySummary.ts` を読み込み、`id` が `{date}` から始まるエントリがいくつあるか数えてください。

`id = {date} + ゼロ埋め2桁の連番`

- その日のエントリが0件なら → `{date}01`
- 1件（`{date}01`）あれば → `{date}02`
- 2件あれば → `{date}03`
- …以降同様

### 3. AllDiarySummary.ts を更新

配列の**先頭**に新しいエントリを追加してください。

```ts
{
    id: {id},
    title: '{title}',
    thumbnail: '{thumbnail}',
    date: '{yyyy-mm-dd}',
    tags: {tags},
},
```

`date` フィールドは `yyyymmdd` を `yyyy-mm-dd` に変換して使ってください。

### 4. .md ファイルの存在確認と作成

`astro_src/pages/diary/{id}.md` が存在するか確認してください。

**存在しない場合のみ**、以下のテンプレートで作成してください：

```md
---
layout: '../../layouts/DiaryLayout.astro'
title: '{title}'
---
# {title}

（ここに本文を書く）
```

**存在する場合**は何もしません。

### 5. 完了報告

追加した内容（id, title, thumbnail, date, tags）と、mdファイルを作成したかどうかを報告してください。
