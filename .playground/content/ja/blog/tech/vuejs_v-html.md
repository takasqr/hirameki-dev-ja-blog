---
title: 【Vue3】v-htmlとは？使い方を紹介する
description: v-htmlとは?v-htmlとは、htmlを値に指定することで、そのままhtmlとして出力してくれるディレクティブ(vue独自の属性)です。Vue3で動きます。v-htmlは非常に自由に使える反面、セキュリティに注意が必要なディレクティブです。
slug: vuejs_v-html
category: vuejs
createDate: 2022/07/09
updated: 
cover: 'https://res.cloudinary.com/takasqr/image/upload/v1658415297/vuejs_v-html_hxd7tb.png'
alt: 【Vue3】v-htmlとは？使い方を紹介する
recommend: false
---

## v-htmlとは
v-htmlとは、htmlを値に指定することで、そのままhtmlとして出力してくれるディレクティブ(vue独自の属性)です。Vue3で動きます。

v-htmlは非常に自由に使える反面、セキュリティに注意が必要なディレクティブです。

::self-introduction
::

## v-htmlの使い方
`data`に指定しているhtmlがそのまま、描画されます。

```vue
<script setup>
let html = '<h1>Page title</h1>'
</script>

<template>
  <div v-html="html" />
</template>
```

<img src="https://firebasestorage.googleapis.com/v0/b/t8dev-ad45b.appspot.com/o/blog%2Fvuejs%2Fvuejs_v-html_1.png?alt=media&token=25bef789-f2a3-42f1-8fab-c6914679eef5"></img>

## v-htmlはxssに注意

v-html非常に自由に使える反面、セキュリティに注意が必要なディレクティブです。

特にユーザーが入力した値をそのまま`v-html`で使うのは絶対にやめましょう。
悪意のあるユーザーに悪用される恐れがあります。

```vue
<script>
  import { ref } from 'vue'
  export default {
    setup() {
      let html = ref('<h1>Page title</h1>')
      return {
        html
      }
    }
  }
</script>

<template>
  <input v-model="html" />
  <div v-html="html" />
</template>
```

上の例だと、inputに入力した値がそのままhtmlとして描画されてしまいます。

<img src="https://firebasestorage.googleapis.com/v0/b/t8dev-ad45b.appspot.com/o/blog%2Fvuejs%2Fvuejs_v-html_2.png?alt=media&token=50dc41b1-3a3e-4764-a8c6-a8bd0fcbf379"></img>


上の例には`v-model`が登場します。詳しくはこちら。

<post-card-small-2 slug="vuejs_v-model" lang="ja"></post-card-small>

## v-htmlで出力したhtmlにCSSをあてる

v-htmlで出力したhtmlには単一ファイルコンポーネントの`scoped`で設定したstyleが当たりません。v-htmlのhtmlにCSSを当てたい場合はディープセレクタというものを使う必要があります。

[Deep Selectors | Scoped CSS | Vue Loader](https://vue-loader.vuejs.org/guide/scoped-css.html#deep-selectors)


これはうまくいかない。

```vue
<script>
  import { ref } from 'vue'
  export default {
    setup() {
      let html = ref('<h1>Page title</h1>')
      return {
        html
      }
    }
  }
</script>

<template>
  <div>
    <input v-model="html" />
    <div v-html="html" />
    <h1>Page title</h1>
  </div>
</template>

<style scoped>
h1 {
  color: red
}
</style>
```

<img src="https://firebasestorage.googleapis.com/v0/b/t8dev-ad45b.appspot.com/o/blog%2Fvuejs%2Fvuejs_v-html_3.png?alt=media&token=a5d8a06f-8fa1-4306-ba29-3f2f99d69127"></img>

これだとうまくいく。

```vue
<script>
  import { ref } from 'vue'
  export default {
    setup() {
      let html = ref('<h1>Page title</h1>')
      return {
        html
      }
    }
  }
</script>

<template>
  <div class="title">
    <input v-model="html" />
    <div v-html="html" />
    <h1>Page title</h1>
  </div>
</template>

<style scoped>
.title >>> h1 {
  color: red
}
</style>
```

<img src="https://firebasestorage.googleapis.com/v0/b/t8dev-ad45b.appspot.com/o/blog%2Fvuejs%2Fvuejs_v-html_4.png?alt=media&token=2434032a-0786-4f61-8242-5fab2c547136"></img>

さらに`scss`を使っている場合は`>>>`だとうまくいかないので、`/deep/`か`::v-deep`と書くといいようです。