---
title: 【Vue3】v-forとは？使い方を紹介する
description: v-forはhtmlを繰り返し表示させたい時に便利なディレクティブです。リストを表示するときなどに使えます。keyやindexを使った基本的な方法から、連想配列、v-ifとの同時使用についてもサンプルコードと一緒に説明します。
slug: vuejs_v-for
category: vuejs
createDate: 2022/07/11
updated: 2022/08/08
cover: 'https://res.cloudinary.com/takasqr/image/upload/v1658415296/vuejs_v-for_jfyxsq.png'
alt: 【Vue3】v-forとは？使い方を紹介する
recommend: false
---

## v-forとは？

html(DOM)を繰り返し表示させたい時に便利なディレクティブです。

リストを表示するときなどに使えます。



## v-forの書き方
v-forの書き方を説明します。


### 基本形
v-forは値の部分に、`item in items`の形式で書く必要があります。

`items`がデータソースで、`item`がループ後に使用出来る単体データです。

```vue
<script>
  import { reactive } from 'vue'
  export default {
    setup() {
      let items = reactive(['apple', 'orange'])
      return {
        items
      }
    }
  }
</script>


<template>
  <ul>
    <li v-for="item in items" :key="item">
      {{ item }}
    </li>
  </ul>
</template>
```

<img src="https://firebasestorage.googleapis.com/v0/b/t8dev-ad45b.appspot.com/o/blog%2Fvuejs%2Fvuejs_v-for_1.png?alt=media&token=4d084fb3-2e42-4436-bc0a-01292b14cbe9"></img>

### v-forのindexとは

`(item, index) in items`のように`item`のパートに二つ目の引数をとることで、indexを取り出すことができます。

```vue
<template>
  <ul>
    <li v-for="(item, index) in items" :key="item">
      {{ index + ' - ' + item }}
    </li>
  </ul>
</template>
```

<img src="https://firebasestorage.googleapis.com/v0/b/t8dev-ad45b.appspot.com/o/blog%2Fvuejs%2Fvuejs_v-for_2.png?alt=media&token=1d63f856-efe9-4c8b-9042-37d39cbe9b21"></img>

### v-forのkeyとは
v-forを使う時は一緒にv-bindでkey属性を追加することが推奨されています。

そうすることで、データソースの値を、後から操作した時に整合性ととれた挙動になります。

```vue
<template>
  <ul>
    <li v-for="(item, index) in items" :key="item">
      {{ index + ' - ' + item }}
    </li>
  </ul>
</template>
```

<img src="https://firebasestorage.googleapis.com/v0/b/t8dev-ad45b.appspot.com/o/blog%2Fvuejs%2Fvuejs_v-for_3.png?alt=media&token=792cb116-9253-477c-b5c7-908c4309d622"></img>

[キー付き v-for | スタイルガイド | Vue.js](https://v3.ja.vuejs.org/style-guide/#キー付き-v-for-必須)

### v-forで連想配列をループする
v-forのデータソースにJavascriptの連想配列を取ることもできます。

```vue
<script>
  import { reactive } from 'vue'
  export default {
    setup() {
      let object = { name: 'apple', count: 1 }
      return {
        object
      }
    }
  }
</script>


<template>
  <ul>
    <li v-for="(value, name, index) in object" :key="index">
      {{ index + ' - ' + name + ' : ' + value }}
    </li>
  </ul>
</template>
```

<img src="https://firebasestorage.googleapis.com/v0/b/t8dev-ad45b.appspot.com/o/blog%2Fvuejs%2Fvuejs_v-for_4.png?alt=media&token=a05e886c-9184-4a20-98b5-8653a796e639"></img>

### v-forで指定回数ループする
v-forのデータソースに整数を指定することで、指定した回数だけ要素をループさせることができます。

```vue
<template>
  <ul>
    <li v-for="n in 5" :key="n">
      {{ n }}
    </li>
  </ul>
</template>
```

<img src="https://firebasestorage.googleapis.com/v0/b/t8dev-ad45b.appspot.com/o/blog%2Fvuejs%2Fvuejs_v-for_5.png?alt=media&token=9ce0d044-7381-4196-9763-710ee98338c6"></img>

## v-ifとv-forを同時に使う
> v-if と v-for を同時に利用することは 推奨されません。

これは同じ要素に`v-if`と`v-for`を使用することが推奨されないという意味です。回避するには`v-for`の中の要素で`v-if`を使用することが公式サイトで推奨されています。

公式サイトで推奨されている回避方法を紹介します。

```vue
<script>
  import { reactive } from 'vue'
  export default {
    setup() {
      let items = reactive([{ name: 'apple', isView: true }, { name: 'orange', isView: false }])
      return {
        items
      }
    }
  }
</script>


<template>
  <ul>
    <template v-for="item in items" :key="item.name">
      <li v-if="item.isView">
        {{ item.name }}
      </li>
    </template>
  </ul>
</template>
```

<img src="https://firebasestorage.googleapis.com/v0/b/t8dev-ad45b.appspot.com/o/blog%2Fvuejs%2Fvuejs_v-for_6.png?alt=media&token=939785d9-48cc-48e7-a153-107c742d97b0"></img>

[v-for と v-if | リストレンダリング | Vue.js](https://v3.ja.vuejs.org/guide/list.html#v-for-と-v-if)

