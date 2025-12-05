---
title: 【Vue3】emitとは？使い方を紹介する
description: 子コンポーネントから親コンポーネントにデータを渡したい時があると思います。そんな時はemitを使うと、データを渡すことがどきます。子コンポーネント独自のイベントをemitを使って発火させます。親コンポーネントではv-onを使ってイベントを受け取ります。
slug: vuejs_emit
category: vuejs
createDate: 2022/07/29
updated: 
cover: 'https://res.cloudinary.com/takasqr/image/upload/v1659161357/vuejs_emit_uvmuwv.png'
alt: 【Vue3】emitとは？使い方を紹介する
recommend: false
---
## vuejsのemitとは

子コンポーネントから親コンポーネントにデータを渡したい時があると思います。

そんな時はemitを使うと、データを渡すことがどきます。



## emitの使い方

* 子コンポーネント独自のイベントをemitを使って発火させる
* 親コンポーネントではv-onを使ってイベントを受け取る

という仕組みです。

親コンポーネント。

```vue
<child-component v-on:custom-event="myMethod">
```

子コンポーネント。

```js
this.$emit(custom-event, value)
```