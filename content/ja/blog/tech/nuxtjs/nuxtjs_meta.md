---
title: 【サンプル有】Nuxtでhead内にmetaタグを出力する2つの方法
description: Nuxtでmetaタグを出力する2つの方法を紹介します。nuxt.config.jsに設定します。nuxt.config.jsに書いたmetaタグは基本的に全てのページで出力されます。なので、どのページでも出力したいmetaタグはnuxt.config.jsに書きます。
slug: nuxtjs_meta
category: nuxtjs
createDate: 2021/09/29
updated: 
cover: 'https://res.cloudinary.com/takasqr/image/upload/l_text:Sawarabi%20Gothic_80_bold:【サンプル有】Nuxtでhead内にmetaタグを出力する,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: 【サンプル有】Nuxtでhead内にmetaタグを出力する2つの方法
recommend: false
---
## はじめに



Nuxtでmetaタグを出力する2つの方法を紹介します。

::self-introduction
::

## nuxt.config.js

`nuxt.config.js`に設定します。

```js
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - ライトリ',
    title: 'トップページ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  }
```
出力結果。

```html
<head>
  <title>トップページ - ライトリ</title>
  <meta data-n-head="ssr" charset="utf-8">
  <meta data-n-head="ssr" name="viewport" content="width=device-width, initial-scale=1">
  <meta data-n-head="ssr" name="format-detection" content="telephone=no">
  <link data-n-head="ssr" rel="icon" type="image/x-icon" href="/favicon.ico">
</head>
```

`nuxt.config.js`に書いたmetaタグは基本的に全てのページで出力されます。
なので、どのページでも出力したいmetaタグは`nuxt.config.js`に書きます。


## pagesディレクトリ内

pagesディレクトリ内の`.vue`ファイルに設定します。

```js
export default {
  head () {
    return {
      meta: [
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: 'ライトリ' },
        { hid: 'og:description', property: 'og:description', content: '@saqtakaのブログ' },
        { hid: 'og:image', property: 'og:image', content: 'https://litely.net/og_image.png' },
        // Twitter Card
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@saqtaka' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'ライトリ' },
        { hid: 'twitter:description', name: 'twitter:description', content: '@saqtakaのブログ' },
        // サムネイル指定
        { name: 'thumbnail', content: 'https://litely.net/og_image.png' }
      ]
    }
  }
}
```
出力結果。

```html
<head>
  <meta data-n-head="ssr" data-hid="og:title" property="og:title" content="ライトリ">
  <meta data-n-head="ssr" data-hid="og:description" property="og:description" content="@saqtakaのブログ">
  <meta data-n-head="ssr" data-hid="og:image" property="og:image" content="https://litely.net/og_image.png">
  <meta data-n-head="ssr" data-hid="twitter:card" name="twitter:card" content="summary_large_image">
  <meta data-n-head="ssr" data-hid="twitter:site" name="twitter:site" content="@saqtaka">
  <meta data-n-head="ssr" data-hid="twitter:title" name="twitter:title" content="ライトリ">
  <meta data-n-head="ssr" data-hid="twitter:description" name="twitter:description" content="@saqtakaのブログ">
  <meta data-n-head="ssr" name="thumbnail" content="https://litely.net/og_image.png">
</head>
```
pagesディレクトリ内に書くと、ページごとに個別設定することができます。
`nuxt.config.js`に上書きされる形で出力されます。
上のサンプルだと、TwitterのOGP対応用のコードになります。


`asyncData`で値を設定して、動的に値を変えることもできます。

```js
export default {
  async asyncData({ params, $http }) {
    const post = await $http.$get(`https://api.nuxtjs.dev/posts/${params.id}`)
    return { post }
  }
  head () {
    return {
      title: this.post.title,
      meta: [
        { hid: 'description', name: 'description', content: this.post.description }
      ]
    }
  }
}
```
## 最後に

metaタグを設定することでSEOやOGP対策になります。

## 参考
[Meta Tags and SEO | NuxtJS](https://go.nuxtjs.dev/config-head)