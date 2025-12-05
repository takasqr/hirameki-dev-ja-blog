---
title: 【Vue3】refとreactiveとは？使い方を紹介する
description: refやreactiveとは、Composition APIで値をリアクティブに使うための仕組みです。リアクティブとはjavascript側で値が変更されたら、html側に反映される状態のことを言います。Option APIのdataに相当します。
slug: vuejs_ref-reactive
category: vuejs
createDate: 2022/07/29
updated: 
cover: 'https://res.cloudinary.com/takasqr/image/upload/v1659161357/vuejs_ref-reactive_ggmeh3.png'
alt: 【Vue3】refとreactiveとは？使い方を紹介する
recommend: false
---
## vuejsのrefとreactiveとは
`ref`や`reactive`とは、`Composition API`で値をリアクティブに使うための仕組みです。

リアクティブとはjavascript側で値が変更されたら、html側に反映される状態のことを言います。

`Option API`の`data`に相当します。



## refとreactiveの使い方
### refの使い方

```vue
<script>
  import { ref } from 'vue'
  export default {
    setup() {
      let inputData = ref('')
      return {
        inputData
      }
    }
  }
</script>

<template>
  <input v-model="inputData" />
  <p>inputData : {{ inputData }}</p>
</template>
```

### raactiveの使い方

```vue
<script>
  import { reactive } from 'vue'
  export default {
    setup() {
      let reactiveData = reactive({ title: 'Vue 3 Guide' })

      return {
        reactiveData
      }
    }
  }
</script>

<template>
  <p>reactiveData : {{ reactiveData.title }}</p>
</template>
```