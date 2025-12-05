---
title: 【Vue3】v-slotとは？使い方を紹介する
description: コンポーネントにhtmlなどの表示データを渡す時に便利なslotですが、複数のデータをスロットとして渡したい場合があると思います。そんな時は、v-slotディレクティブを使って、名前付きスロットを作ると便利です。v-slotは基本的にtempleteに書く必要があります。
slug: vuejs_v-slot
category: vuejs
createDate: 2022/07/24
updated: 
cover: 'https://res.cloudinary.com/takasqr/image/upload/v1658498117/vuejs_v-slot_n6p4fw.png'
alt: 【Vue3】v-slotとは？使い方を紹介する
recommend: false
---
## v-slotとは
コンポーネントにhtmlなどの表示データを渡す時に便利な`slot`ですが、複数のデータをスロットとして渡したい場合があると思います。

そんな時は、`v-slot`ディレクティブを使って、名前付きスロットを作ると便利です。




## 使い方
### 名前付きスロット
`v-slot`は基本的に`templete`に書く必要があります。または、名前付きではなくデフォルトのスロットを使用してプロパティを受け取る場合はコンポーネントにも書くことができます。

```vue
<script>
  import CustomSection from './CustomSection.vue'
  export default {
    components: { CustomSection }
  }
</script>

<template>
  <CustomSection>
    <template v-slot:header>
      <h1>Page Title</h1>
    </template>
    
    <template v-slot:contents>
      <p>Contents...</p>
    </template>
  </CustomSection>
</template>
```

ちなみにデフォルトの名前は`default`です。