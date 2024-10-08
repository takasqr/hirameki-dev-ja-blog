---
title: Tailwind タイポグラフィーを適用しないエリアを作る
description: Tailwind CSS Typography 便利ですよね。手っ取り早く、整ったスタイルを当てることができるので気に入っています。でもたまにタイポグラフィーを適用している中でスタイルを当てたくない場所があったりします。そんな時は`not-prose`を使うをスタイリングを解除できます。
slug: tailwindcss_not-prose
category: tailwindcss
createDate: 2024/05/19
updated: 
cover: 'https://res.cloudinary.com/t8/image/upload/l_text:Sawarabi%20Gothic_80_bold:Tailwind タイポグラフィーを適用しないエリアを作る,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: Tailwind タイポグラフィーを適用しないエリアを作る
recommend: true
---


Tailwind CSS Typography 便利ですよね。手っ取り早く、整ったスタイルを当てることができるので気に入っています。

でもたまにタイポグラフィーを適用している中でスタイルを当てたくない場所があったりします。そんな時は`not-prose`を使うをスタイリングを解除できます。

```html
<div class="prose">
  <!-- タイポグラフィー適用エリア -->
  <div class="not-prose">
    <!-- タイポグラフィー非適用エリア -->
  </div>
  <!-- タイポグラフィー適用エリア -->
</div>
```

私は、Nuxt Content でマークダウンの記事に Tailwind のタイポグラフィーを使ってスタイリングしています。マークダウンの中でカスタムコンポーネントを使用しているのですが、その中ではタイポグラフィーを適用したくありません。

その時に`not-prose`を使っています。


[GitHub - tailwindlabs/tailwindcss-typography: Beautiful typographic defaults for HTML you don't control.](https://github.com/tailwindlabs/tailwindcss-typography?tab=readme-ov-file#undoing-typography-styles)


::self-introduction
::