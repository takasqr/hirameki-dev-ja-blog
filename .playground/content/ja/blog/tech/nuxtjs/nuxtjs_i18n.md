---
title: 【サンプル有】@nuxt/i18nで多言語対応する
description: NUXTのコンテンツ多言語対応用のモジュールです。このモジュールを使うことで日本語、英語など複数の言語に対応したサイトをNUXTで作ることができます。公式サイトに「Integration with vue-i18n」とあるので、Vueの多言語対応モジュールであるvue-i18nをもとに作られているようです。
slug: nuxtjs_i18n
category: nuxtjs
createDate: 2021/08/20
updated: 
cover: 'https://res.cloudinary.com/takasqr/image/upload/l_text:Sawarabi%20Gothic_80_bold:【サンプル有】nuxt i18nで多言語対応する,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: 【サンプル有】nuxt i18nで多言語対応する
recommend: false
---
## @nuxt/i18nとは？



NUXTのコンテンツ多言語対応用のモジュールです。

このモジュールを使うことで日本語、英語など複数の言語に対応したサイトをNUXTで作ることができます。

公式サイトに、

> Integration with vue-i18n

とあるので、Vueの多言語対応モジュールであるvue-i18nをもとに作られているようです。





## @nuxt/i18nのメリット
メリットは[公式ページ](https://i18n.nuxtjs.org/)で紹介されていますが主に、

* 現在の言語の状態に応じたパスを自動的に生成
* SEO対応
* 翻訳メッセージの遅延読み込み
* ブラウザの言語設定に応じて各言語のページへリダイレクト
* 言語ごとに異なるドメイン名
* Vuexで現在のロケールとメッセージを保存できる

といったことができるようになります。


## 導入
@nuxt/i18nをプロジェクトに導入します。

### インストール

`@nuxt/content`をインストールします。

`npm`
```bash
npm install @nuxtjs/i18n
```

`yarn`
```bash
yarn add @nuxtjs/i18n
```


### nuxt.config.js
`nuxt.config.js`を編集します。
基本のテンプレートが公式サイトで紹介されていました。

```js
{
  modules: [
    '@nuxtjs/i18n'
  ],

  i18n: {
    locales: ['en', 'fr', 'es'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome: 'Welcome'
        },
        fr: {
          welcome: 'Bienvenue'
        },
        es: {
          welcome: 'Bienvenido'
        }
      }
    }
  }
}
```

* `locales`…許可する言語
* `defaultLocale`…デフォルトの言語
* `vueI18n`…内部で使用される`vueI18n`の設定
* `fallbackLocale`…表示される言語の訳がなかったときに参照される言語
* `messages`…各言語ごとの訳

[Options - i18n-module](https://i18n.nuxtjs.org/options-reference)
[#Constructor options | API references | Vue I18n](https://kazupon.github.io/vue-i18n/api/#constructor-options)

## 使い方
基本的に、

* メッセージを管理
* コンポーネント内で表示
* 言語の切り替え

ができれば多言語に対応したサイトを作れます。

### 言語ごとのメッセージを管理する
`nuxt.config.js`を編集します。
```js
  i18n: {
    vueI18n: {
      messages: {
        en: {
          welcome: 'Welcome'
        },
        fr: {
          welcome: 'Bienvenue'
        },
        es: {
          welcome: 'Bienvenido'
        }
      }
    }
  }
```

ただ、`nuxt.config.js`を編集する方法だと、メッセージが多くなってきたときにファイルが肥大化してしまいます。

下の方法だと言語ファイルを分けることができます。

`nuxt.config.js`
```js
  i18n: {
    langDir: 'i18n/'
  }
```

`i18n/en-US.js`
```js
module.exports = {
  hello: 'hello!!'
}

```

例だとプロジェクト直下にi18nというディレクトリを作る必要があります。

### メッセージを取得する

`i18n/en-US.js`で設定したhelloを取得してみます。
```vue
<template>
  <div>
    {{ $t('hello') }}
  </div>
</template>
```

### 現在の言語を取得する
現在の言語を取得するにはこのように書きます。

```js
this.$i18n.locale
```

### 言語を変更する
言語を切り替えるボタンなどで使います。

```js
this.$i18n.locale = 'en'
```
### 多言語対応したリンクを生成する

@nuxt/i18nでは同じページでも現在の言語によってURLが変わります。

なので`nuxt-link`タグを使って現在の言語に合わせたパスを生成します。

```vue
<nuxt-link :to="localePath('/')">{{ $t('home') }}</nuxt-link>
```

javascriptで画面遷移します。

```js
this.$router.push(this.localeRoute({ name: 'example' }))
```
```js
this.$router.push(this.localeRoute({ path: `/example/${this.exampleValue}` }))
```

## さいごに

誰がの役に立てば幸いです。