---
title: 【Vue3】v-modelとは？使い方を紹介する
description: v-modelは、フォームの入力要素(inputなど)に入力された値を同期的に使用するために使います。v-modelが使える要素は、input、select、textarea、オリジナルコンポーネント、があります。Vue3から一つの要素に複数の値をv-modelできるようになりました。
slug: vuejs_v-model
category: vuejs
createDate: 2022/07/12
updated: 
cover: 'https://res.cloudinary.com/takasqr/image/upload/v1658415297/vuejs_v-model_k9fhm2.png'
alt: 【Vue3】v-modelとは？使い方を紹介する
recommend: false
---

## v-modelとは?
v-modelは、フォームの入力要素(inputなど)に入力された値を同期的に使用するために使います。

Vue3対応です。

v-modelが使える要素は、

* input
* select
* textarea
* オリジナルコンポーネント

があります。

::self-introduction
::

## 使い方


### 基本形

基本的な使い方です。

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


## v-modelはシンタックスシュガー

下のコードは同じ動きをします。

```vue
<input
 v-on:input="inputData = $event.target.value"
 v-bind:value="inputData"
/>
```

```vue
<input v-model="inputData" />
```

### 自作のコンポーネントで使う

親コンポーネント。

```vue
<script>
  import { ref } from 'vue'
  import VModelChildren from './VModelChildren.vue'

  export default {
    components: { VModelChildren },
    setup() {
      let inputData = ref('')
      return {
        inputData
      }
    }
  }
</script>

<template>
  <VModelChildren v-model="inputData" />
  <p>inputData : {{ inputData }}</p>
</template>
```

子コンポーネント。

```vue
<script>
  export default {
    props: ['modelValue'],
    emits: ['update:modelValue']
  }
</script>

<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
```

### 複数の値をv-modelでバインディングする

カスタムコンポーネントを使ってる時などに、複数の値をv-modelで使いたくなるかもしれません。

Vue3から一つの要素に複数の値をv-modelできるようになりました。

```vue
<script>
  import { ref } from 'vue'
  import VModelChildren from './VModelChildren.vue'

  export default {
    components: { VModelChildren },
    setup() {
      let height = ref('')
      let weight = ref('')
      return {
        height,
        weight
      }
    }
  }
</script>

<template>
  <VModelChildren v-model:height="height" v-model:weight="weight" />
  <p>height : {{ height }}</p>
  <p>weight : {{ weight }}</p>
</template>
```


```vue
<script>
  export default {
    props: {
      height: String,
      weight: String
    },
    emits: ['update:height', 'update:weight']
  }
</script>

<template>
  <input
    :value="height"
    @input="$emit('update:height', $event.target.value)"
  />
  <input
    :value="weight"
    @input="$emit('update:weight', $event.target.value)"
  />
</template>
```

