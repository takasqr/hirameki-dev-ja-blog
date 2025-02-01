---
title: GitHub Actions で、Node のバージョンを切り替えながら実行する
description: GitHub Actions で、Node のバージョンを切り替えながらワークロードを実行する方法を紹介します。ビルドする時に、一つのサイトで複数のフレームワークを使っている時なんかに使えると思います。
slug: github_actions_switching_node_versions
category: github
createDate: 2024/04/23
updated: 
cover: 'https://res.cloudinary.com/takasqr/image/upload/l_text:Sawarabi%20Gothic_80_bold:GitHub Actions で、Node のバージョンを切り替えながら実行する,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: GitHub Actions で、Node のバージョンを切り替えながら実行する
recommend: true
---

GitHub Actions で、Node のバージョンを切り替えながらワークロードを実行する方法を紹介します。

ビルドする時に、一つのサイトで複数のフレームワークを使っている時なんかに使えると思います。


```yaml
- uses: actions/setup-node@v3
with:
    node-version: '16'
- run: npm ci

- uses: actions/setup-node@v3
with:
    node-version: '18'
- run: npm ci
```

`setup-node`で切り替えて実行する。

::self-introduction
::