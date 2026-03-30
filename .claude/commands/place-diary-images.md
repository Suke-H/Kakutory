# place-diary-images

日記 `.md` ファイル内の `画像`とだけ書いている行とを、対応する画像フォルダのファイルに置き換えるスキルです。

## 引数

```
$ARGUMENTS
```

引数として `id`（例: `2026032901`）を受け取ります。省略した場合は対話的に確認します。

## 手順


### 1. ファイルと画像フォルダの確認

- 対象mdファイル: `astro_src/pages/diary/{id}.md`
- 画像フォルダ: `public/images/{id}/`

両方を確認してください。

- mdファイルが存在しない場合はエラーを報告して終了
- 画像フォルダが存在しない場合はエラーを報告して終了

`public/images/{id}/` にあるファイル一覧を取得してください。

各 `画像` の前後の文脈（前後5行程度）を確認し、どの画像ファイルが適切かを判断します。

### 2. 画像ファイルのマッピング

対象mdファイル内の各プレースホルダーを置き換えてください：

- `タイトル画像` → `<img>` タグのみ（captionなし）
```md
<img src="/images/{id}/{filename}" alt="{alt}" width="100%" />
```

- `画像` → `<figure>` タグ
```md
<figure>
  <img src="/images/{id}/{filename}" alt="{alt}" width="100%" />
  <figcaption>{caption}</figcaption>
</figure>
```

画像ファイル名と周辺テキストの文脈から、各 `画像` プレースホルダーに最適なファイルを割り当ててください。

ファイル名のヒント例：
- `xxx-hagemashi.jpg` → 励ましのシーン
- `xxx-robot-takusan.jpg` → ロボットがたくさんいるシーン
- `nowa-waai.jpg` → ノワが喜んでいるシーン
- `hoppy-waai.jpg` → ホッピーが喜んでいるシーン

- `alt` と `figcaption` も文脈から適切に設定してください（キャラ名や場面の簡単な説明）
- 画像パスは `/images/{id}/` から参照すること