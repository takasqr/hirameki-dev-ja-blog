---
title: Vuefityでv-iconを使う方法【本番用の設定も紹介】
description: Vuetifyでサイトにアイコンを表示する方法を紹介します。Nuxtで行う方法も紹介します。公式ページによると、Vuetifyは4種類のアイコンセットに対応しています。v-iconコンポーネントを使って表示します。
slug: vuetifyjs_v-icon
category: vuetifyjs
createDate: 2022/01/24
updated: 
cover: 'https://res.cloudinary.com/takasqr/image/upload/l_text:Sawarabi%20Gothic_100_bold:Vuefity.jsでv-iconを使う,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: Vuefityでv-iconを使う方法【本番用の設定も紹介】
recommend: false
---
## Vuetifyでアイコンを使いたい



Vuetifyでサイトにアイコンを表示する方法を紹介します。
Nuxtで行う方法も紹介します。

[公式ページ](https://vuetifyjs.com/ja/features/icon-fonts/#install-font-awesome-5-icons)によると、Vuetifyは4種類のアイコンセットに対応しています。

* Material Design Icons
* Material Icons
* Font Awesome 4
* Font Awesome 5

デフォルトで`Material Design Icons`が設定されています。

`Font Awesome`などを使いたい場合は、[こちら](https://vuetifyjs.com/ja/features/icon-fonts/#install-font-awesome-5-icons)に変更方法が書いてあります。

::self-introduction
::

## 使い方

`Material Design Icons`を`v-icon`コンポーネントを使って表示します。

```vue
<v-icon>
  mdi-twitter
</v-icon>
```

例えば、このコードでTwitterのアイコンが表示されます。

表示させたいアイコンは[Material Design Icons](https://materialdesignicons.com/)のページで探すことができます。

## アイコン一覧
v-iconで使えるアイコンの一覧はアイコンセットのサイトで確認できます。
例えばデフォルトで設定されている`Material Design Icons`であれば、[このサイト](https://materialdesignicons.com/)で確認できます。

### アイコンセットの公式サイト一覧
* [Material Design Icons](https://materialdesignicons.com/)
* [Font Awesome](https://fontawesome.com/icons/)
* [Material Icons](https://fonts.google.com/icons?selected=Material+Icons)

## v-btnの中でv-iconを使う
`v-btn`の中で`v-icon`を使うことができます。

```vue
<v-btn>
  Accept
  <v-icon>
    mdi-checkbox-marked-circle
  </v-icon>
</v-btn>
```

## v-iconをボタンとして使う
`v-icon`に直接クリックイベントを設定する方法。
```vue
<v-icon
  @click="clickEvent"
>
  mdi-chevron-right
</v-icon>
```


円形の`v-btn`で包んで使う方法。

```vue
<v-btn
  fab
  href="https://github.com/takasqr"
>
  <v-icon>
    mdi-twitter
  </v-icon>
</v-btn>
```

この方法だと、`v-btn`にクリックイベントや`href`をつけて使いやすいです。
デザイン的にも`v-btn`に`elevation`を付けて立体感をつけたりと調整しやすいと思います。

## v-icon color
アイコンに色を付けるには`color`で指定します。

```vue
<v-icon
  color="green darken-2"
>
  mdi-twitter
</v-icon>
```

カラーコードでも指定できます。
```vue
<v-icon
  color="#000000"
>
  mdi-twitter
</v-icon>
```

カラー一覧は[こちら](https://vuetifyjs.com/ja/styles/colors/)

[Colors | VUETIFY](https://vuetifyjs.com/ja/styles/colors/)

## 本番用の設定にする
非常に簡単にアイコンを表示させれる`v-icon`コンポーネントですが、一つ問題があります。

それは初期設定のままだと、使用しないアイコンまで読み込んでしまい、ページの初期表示の負担になってしまうことです。

そこで、使用するアイコンのみ読み込むようにします。[`@mdi/js`](https://www.npmjs.com/package/@mdi/js)を使用します。

これは公式ページでも、

> これは、本番環境用にアプリケーションを最適化する際に推奨されるインストールです。

> 使用するアイコンのみをカスタムインポートすることで、バンドルサイズを大幅に小さくすることが出来ます。

と紹介されている[方法](https://vuetifyjs.com/ja/features/icon-fonts/#material-design-icons-js-svg)です。


以下、手順です。

1. `@mdi/js`のインストール
1. `src/plugins/vuetify.js`の設定
1. 【Nuxtのみ】`defaultAssets`の設定
1. `v-icon`でアイコンを表示

### 1. `@mdi/js`のインストール

`@mdi/js`をインストールします。

```bash
npm install @mdi/js -D
```

### 2. `src/plugins/vuetify.js`の設定

`vuetify.js`の設定をします。
Nuxtの場合は`nuxt.config.js`です。

```js[src/plugins/vuetify.js]
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg',
  },
})

```

### 3. 【Nuxtのみ】`defaultAssets`の設定

Nuxtでは`defaultAssets`の`icons`を`false`にしないと、デフォルトのアイコンセットが読み込まれるままの状態になってしまうので、`false`にします。

[ここ](https://github.com/nuxt-community/vuetify-module#defaultassets)に詳しく書いてあります。

```js
    defaultAssets: {
      icons: false
    },
```

Nuxtは最終的に`nuxt.config.js`がこうなります。

```js[nuxt.config.js]
    defaultAssets: {
      icons: false
    },
    icons: {
      iconfont: 'mdiSvg'
    },
```

### 4. `v-icon`でアイコンを表示
試しに、TwitterとGitHubのアイコンを表示します。


```vue
<template>
  <v-icon>
      {{ mdiTwitterSvgPath }}
  </v-icon>
  <v-icon>
      {{ mdiGithubSvgPath }}
  </v-icon>
</template>

<script>
import { mdiTwitter, mdiGithub } from '@mdi/js'

export default {
  data () {
    return {
      mdiTwitterSvgPath: mdiTwitter,
      mdiGithubSvgPath: mdiGithub
    }
  }
}
</script>

```