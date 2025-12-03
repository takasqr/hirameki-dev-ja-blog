---
title: 【Vue3】v-showとは？使い方を紹介する
description: v-showとは条件付きでhtml(DOM)を表示するときに使用するディレクティブです。trueとfalseで表示するかを判定しています。v-showはCSSのdisplayプロパティを使って表示を切り替えています。複数の要素を切り替えるには、divなどで囲ってから、v-showを使います。
slug: vuejs_v-show
category: vuejs
createDate: 2022/07/04
updated: 
cover: 'https://res.cloudinary.com/takasqr/image/upload/v1658498117/vuejs_v-show_m42mbg.png'
alt: 【Vue3】v-showとは？使い方を紹介する
recommend: false
---

`v-show`とは条件付きでhtml(DOM)を表示するときに使用するディレクティブ(vue独自の属性)です。


::self-introduction
::


## 使い方
使い方を紹介します。Vue3で動きます。

### 基本

```vue
<script setup>
let isView = true
</script>

<template>
  <p v-show="isView">v-show example</p>
</template>
```

trueとfalseで表示するかを判定しています。

* trueで表示
* falseで非表示

Javascriptで動的に表示と非表示を切り替えていきます。

`v-show`はCSSの`display`プロパティを使って表示を切り替えています。

Vueでの書き方。
```vue
<p v-show="isView">v-show example</p>
```

実際のHTML。
```vue
<p style="display: none;">v-show example</p>
```

`p`タグにインラインでCSSが追加されているのがわかると思います。

### v-showで複数要素を扱う
複数の要素を切り替えるには、`div`などで囲ってから、`v-show`を使います。

```vue
<template>
  <h1>Page Title</h1>
  <div v-show="isView">
    <p>v-show example</p>
    <p>This Page is v-show example page</p>
  </div>
</template>
```

### v-showの複数条件

* 複数の条件式がtrueの時
* どちらかの条件式がtrueの時

などのような条件にも対応できます。Javascriptのif文と同じです。

```vue
<script setup>
let isView = true
let isShow = true
</script>

<template>
  <p v-show="isView && isShow">v-show example</p>
</template>
```

```vue
<script setup>
let isView = false
let isShow = true
</script>

<template>
  <p v-show="isView || isShow">v-show example</p>
</template>
```

### v-ifとv-showの違い

似た機能を持つディレクティブにv-showがあります。違いを説明します。

v-ifの場合。
* DOMを本当に描画したり削除している

v-showの場合。
* DOMは常に描画していて、CSSで表示と非表示を切り替えている

という違いがあります。

なのでv-ifは切り替え時にDOMの操作を行うので、時間がかかり、v-showは常に表示したくないDOMも描画しているので初期表示に時間がかかる性質があります。



