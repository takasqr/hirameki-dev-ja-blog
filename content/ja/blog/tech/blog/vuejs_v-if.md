---
title: 【Vue3】v-ifとは？使い方を紹介する
description: 
slug: vuejs_v-if
category: vuejs
createDate: 2022/07/04
updated: 
cover: 'https://res.cloudinary.com/t8/image/upload/v1658498117/vuejs_v-if_bgsdmi.png'
alt: 【Vue3】v-ifとは？使い方を紹介する
recommend: false
---

`v-if`とは条件付きでhtml(DOM)を表示するときに使用するディレクティブ(vue独自の属性)です。



## 使い方
使い方を紹介します。Vue3で動きます。

::self-introduction
::

### 基本

```vue
<script setup>
let isView = true
</script>

<template>
  <p v-if="isView">v-if example</p>
</template>
```

trueとfalseで表示するかを判定しています。

* trueで表示
* falseで非表示

Javascriptで動的に表示と非表示を切り替えていきます。

### templeteで複数要素を扱う
複数の要素を切り替えるには、Vueの汎用的なタグであるtempleteを使うと便利です。

divなどをを使っても大丈夫です。

```vue
<template>
  <h1>Page Title</h1>
  <template v-if="isView">
    <p>v-if example</p>
    <p>This Page is v-if example page</p>
  </template>
</template>
```

### v-else
v-ifの条件式がfalseだった時、別の要素を表示させたい場合はv-elseを使うといいです。

```vue
<script setup>
let isView = false
</script>

<template>
  <p v-if="isView">v-if example</p>
  <p v-else>isViewはtrue以外です。</p>
</template>
```



### v-else-if
v-ifを複数条件で使いたい場合はv-else-ifを使います。Javascriptのelse ifと同じですね。

```vue
<script setup>
let isView = false
</script>

<template>
  <p v-if="isView">v-if example</p>
  <p v-else-if="isView === false">isViewはfalseです。</p>
</template>
```

### v-ifの複数条件

* 複数の条件式がtrueの時
* どちらかの条件式がtrueの時

などのような条件にも対応できます。Javascriptのif文と同じです。

```vue
<script setup>
let isView = true
let isShow = true
</script>

<template>
  <p v-if="isView && isShow">v-if example</p>
</template>
```

```vue
<script setup>
let isView = false
let isShow = true
</script>

<template>
  <p v-if="isView || isShow">v-if example</p>
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



