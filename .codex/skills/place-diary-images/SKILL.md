---
name: place-diary-images
description: 日記Markdown内の「タイトル画像」と「画像」プレースホルダーを、対応する画像ファイルのHTMLへ置き換える。日記へ画像を配置するときに使う。
---

# 日記画像配置

## 入力

日記IDを受け取ります。省略された場合は確認します。

## 手順

1. 対象のMarkdownファイルと画像フォルダを確認します。どちらかがなければ報告して終了します。
2. 画像一覧と各プレースホルダーの前後5行程度を確認し、文脈に合う画像を割り当てます。
3. `タイトル画像`を次の形式へ置き換えます。

```md
<img src="/images/{id}/{filename}" alt="{alt}" width="100%" />
```

4. `画像`を次の形式へ置き換えます。

```md
<figure>
  <img src="/images/{id}/{filename}" alt="{alt}" width="100%" />
  <figcaption>{caption}</figcaption>
</figure>
```

5. ファイル名と周辺文脈から`alt`と`figcaption`を具体的に設定し、同じ画像を重複使用しません。
