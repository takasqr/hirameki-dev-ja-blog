---
title: 【Vue3】mountedとは？使い方を紹介する
description: mountedはvueのライフサイクルフックの中でcreatedの次に呼び出されます。Option APIでコンポーネントを作っていく時はmountedの中に書きます。Composition APIでコンポーネントを作っていく時はonMountedの中に書きます。
slug: vuejs_mounted
category: vuejs
createDate: 2022/07/29
updated: 
cover: 'https://res.cloudinary.com/t8/image/upload/v1659161357/vuejs_mounted_lqq8uu.png'
alt: 【Vue3】mountedとは？使い方を紹介する
recommend: false
---
## vuejsのmountedとは

vueのライフサイクルフックの中で`created`の次に呼び出されます。

::self-introduction
::

## mountedの使い方

### Option APIでのmounted

`Option API`でコンポーネントを作っていく時は`mounted`の中に書きます。

```vue
<script>
export default {
  mounted: function () {
    console.log('mounted!')
  }
}
</script>
```

### Composition APIでのmounted

`Composition API`でコンポーネントを作っていく時は`onMounted`の中に書きます。

```vue
<script>
import { onMounted } from 'vue'

export default {
  setup() {
    onMounted(() => {
      console.log('mounted!')
    })
  }
}
</script>
```

[ライフサイクルフック | Composition API | Vue.js](https://v3.ja.vuejs.org/api/composition-api.html#%E3%83%A9%E3%82%A4%E3%83%95%E3%82%B5%E3%82%A4%E3%82%AF%E3%83%AB%E3%83%95%E3%83%83%E3%82%AF)