---
title: 【Vue3】v-onとは?使い方を7パターン紹介する
description: v-onはhtml要素のイベントに関連するディレクティブ(vue独自の属性)です。ボタンをクリックした時に、特定の処理を行いたい時などに使うことができます。使い方を紹介します。全部で7パターンあります。Vue3で動きます。
slug: vuejs_v-on
category: vuejs
createDate: 2022/07/01
updated: 
cover: 'https://res.cloudinary.com/takasqr/image/upload/v1658498117/vuejs_v-on_fiuhnz.png'
alt: 【Vue3】v-onとは?使い方を7パターン紹介する
recommend: false
---

## 【Vue3】v-onとは?使い方を7パターン紹介する

`v-on`はhtml要素のイベントに関連するディレクティブ(vue独自の属性)です。

ボタンをクリックした時に、特定の処理を行いたい時などに使うことができます。

::self-introduction
::

## 使い方
使い方を紹介します。全部で7パターンあります。Vue3で動きます。

### 1. 基本形

v-onの基本的な書き方です。

```vue
<button v-on:[イベント名]="[Javascript式]">ボタン</button>
```

実行したい`[Javascript式]`と`[イベント名]`を要素に書いていきます。

具体的にはこのように書きます。

```vue
<template>
  <div>
    <button v-on:click="counter += 1">+1</button>
    <p>count: {{ counter }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    }
  }
}
</script>
```

<img src="https://firebasestorage.googleapis.com/v0/b/t8dev-ad45b.appspot.com/o/blog%2Fvuejs%2Fvuejs_v-on_1.png?alt=media&token=3be025ba-6d1c-49a9-b384-3b3405b1ee7c"></img>



### 2. 省略したv-onの書き方
`v-on`は`@`に省略することができます。
v-on:clickを@clickと書くことで、少しですがタイプ数を減らすことができます。

```vue
<button v-on:click="counter += 1">+1</button>
```

👇

```vue
<button @click="counter += 1">+1</button>
```

二つのコードは同じ内容です。

### 3. メソッド
Javascript式だけでは、複雑な処理を行うのにコードの見栄えが悪くなってしまいます。そこで、`v-on`では`methods`を呼び出すこともできます。処理が複数行になる場合はこちらの方が便利です。

```vue
<button @click="countUp()">+1</button>
```

`countUp()`のメソッドを呼び出す部分は`countUp`とかっこを省略しても大丈夫です。

```vue
<button @click="countUp">+1</button>
```



### 4. メソッド引数付き

メソッドに引数を渡せます。`data`の値を動的に使いながら`methods`を呼び出す時などに便利です。

```vue
<button @click="countUp(1)">+1</button>
```

### 5. イベント修飾子
ディレクティブの動きを変更する修飾子という仕組みがあります。`v-on`にいくつか修飾子があります。
`.prevent`のような形で表現します。

```vue
<form @submit.prevent="onSubmit"></form>
```

上の例は、`event.preventDefault()`を呼び出すので、ページがリロードされるのを防ぎます。



### 6. キー修飾子
「エンターが押されたとき」などの特定のキーボードイベントを捕捉することもできます。キー修飾子を使います。

```vue
<input v-on:keyup.enter="onSubmit">
```


### 7. イベントを渡す
`$event`を`methods`の引数として渡すことで、`methods`の中でDOMイベントにアクセスできます。

```vue
<button @click="countUp(1, $event)">+1</button>
```

## コーディングのポイント
公式ドキュメントを読むと、 __メソッドにはロジックのみを書いていくべき__ という設計思想のようです。そのためにイベント修飾子がある。

そうすることで、コードが読みやすくなって、ユニットテストもしやすくなるというメリットがあります。

