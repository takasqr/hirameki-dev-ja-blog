---
title: 【Vue3】watchオプションとは？使い方を紹介する
description: dataやpropsなどの値が変更された時に別の処理を実行したいことがあると思います。そんなときにはwatchオプションを使います。配列やオブジェクトをwatchで監視している場合、Vue3では基本的にまるごと置き換えられたときしか反応しません。
slug: vuejs_watch
category: vuejs
createDate: 2022/07/29
updated: 
cover: 'https://res.cloudinary.com/takasqr/image/upload/v1659104694/vuejs_watch_bdnvnt.png'
alt: 【Vue3】watchオプションとは？使い方を紹介する
recommend: false
---
## vuejsのwatchとは
`data`や`props`などの値が変更された時に別の処理を実行したいことがあると思います。そんなときには`watch`オプションを使います。

::self-introduction
::

## watchオプションの使い方
以下のように書いてきます。

```html
<script>
export default {
  data () {
    return {
      task: 'study'
    }
  },
  watch: {
    task: {
      handler(newValue, oldValue) {
        console.log('task changed')
      }
    }
  }
}
</script>
```

### deepオプションで配列やObjectの変更を監視する
配列やオブジェクトを`watch`で監視している場合、Vue3では基本的にまるごと置き換えられたときしか反応しません。
配列やオブジェクトに値を足したり、削るなどの「変更」では、`watch`は反応しません。

もし、配列やオブジェクトの値の変更も監視したい場合は`deep`オプションをつける必要があります。

```js
watch: {
  todoList: {
    handler(newValue, oldValue) {
      console.log('todo list changed')
    },
    deep: true
  }
}
```

### immediateオプション
immediateオプションは、監視が開始した直後に一度コールバックが呼び出されるオプションです。
immediateのタイミングで`handler`が呼び出された場合は`unwatch`が使えないことに注意してください。
`unwatch`は値の監視をやめる関数のことです。

```js
watch: {
  task: {
    handler(newValue, oldValue) {
      console.log('task changed!')
    },
    immediate: true
  }
}
```

### propsをwatchで監視する

`watch`オプションでは`props`も監視することができます。


```vue
<template>
  <p>
    task: {{ task }}
  </p>
</template>

<script>
  export default {
    props: {
      task: String
    },
    watch: {
      task: {
        handler(newValue, oldValue) {
          console.log('task chenged!')
        }
      }
    }
  }
</script>
```

[Vue SFC Playgroundはこちら](https://sfc.vuejs.org/#eNqlUctuwyAQ/JUtFydSAuo1ciNV/YRKPXGh9sZ2ykuAk0qW/71AnMSqpfaQC+wus8PszkBeraWnHsmOlAGVlSLgnmuA8s0oC0H4rxdOgqnNMyf7kqVqfC/ZDBxTX7nOhtzYKWtcgNx+cEZBQXNX+qVIYAD8zpAaD6KXAYZUA7DOWL+7ZpD/3sF7cJ1uLrVxc7mrSGc06jCHpz8mWLriUbJJFtmQi6qtEpYevdFx3NzIpwfPyY2Kk6g05Zy0IURJjPlDleQfPTWuYTGirtehU0jRq+2nM2ePLhJzMinMHCwWT+i2DnWNDt1fnL+gC95ppDGOcl3m0rLkzH1zw5ADGPM+SvaPb4+achahahfIWwrQCl1LdCuN5w8he9yAkXWO1nNYsld7I5FK06yKPELVom6wfirWd1yeahYsXR9/AOwN7tQ=)

### computedとwatchの使い分け
`watch`と似た処理に`computed`があります。

それぞれ以下のような特徴があります。

* `computed`はリアクティブな値を加工して`templete`で表示するのに向いている
* `watch`は外部APIからデータを取得して表示するようなコストの高い処理を行うのに向いている

公式では`computed`で問題ないのであれば`computed`を利用することが推奨されているようです。

[算出プロパティとウォッチャ | Vue.js](https://v3.ja.vuejs.org/guide/computed.html)