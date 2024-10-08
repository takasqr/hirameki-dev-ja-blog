---
title: javascriptのpushメソッドをわかりやすく説明する
description: javascriptのpushメソッドについて噛み砕いて説明します。pushメソッドとは何か pushはjavascriptのメソッドです。どのようなメソッドかというと、配列の最後に要素を追加する、追加した後の配列の要素数を返すという特徴があります。
slug: javascript_push
category: javascript
createDate: 2021/07/13
updated: 2021/08/22
cover: 'https://res.cloudinary.com/t8/image/upload/l_text:Sawarabi%20Gothic_80_bold:javascriptのpushメソッドをわかりやすく説明する,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: javascriptのpushメソッドをわかりやすく説明する
recommend: false
---
## はじめに



javascriptのpushメソッドについて噛み砕いて説明します。

::self-introduction
::

## pushメソッドとは何か
`push`はjavascriptのメソッドです。
どのようなメソッドかというと、

* 配列の最後に要素を追加する
* 追加した後の配列の要素数を返す

という特徴があります。

## pushメソッドの書き方
pushメソッドは下のように書きます。

```
[配列].push([追加したい値1], [追加したい値1])
```


## pushは配列の最初に追加する

配列とはひとまとまりのデータを一つの変数に格納するためのデータの型です。

```js
const fruits = ['apple', 'banana', 'pear', 'melon', 'watermelon'];

```
のような感じで表現します。

pushメソッドは配列の最後に要素を追加します。

例えば、下のようなコードがあったとします。


```js
const fruits = ['apple', 'banana', 'pear'];

console.log('pushメソッド実行前')
console.log(fruits);

fruits.push('watermelon', 'melon');

console.log('pushメソッド実行後')
console.log(fruits);

```
実行すると、

```js
> "pushメソッド実行前"
> Array ["apple", "banana", "pear"]
> "pushメソッド実行後"
> Array ["apple", "banana", "pear", "watermelon", "melon"]
```
このように値が返ってくると思います。

`"watermelon"`と`"melon"`が最後に増えていますね。

## pushの戻り値について
戻り値とは、メソッドが実行された後に返される値のことです。

例えば、

```js
const fruits = ['apple', 'banana', 'pear'];

const returnValue = fruits.push('watermelon', 'melon');

console.log(returnValue);
```

のような感じで書きます。
例ではpushメソッドの戻り値を`returnValue`に入れて、出力しています。

要素を追加した後の要素数である`5`が出力されると思います。

```
> 5
```
## pushの使い道
配列の最後に値を追加する時に使うことができます。

## さいごに
引数を設定しなくてもエラーにはなりませんが、配列には何も追加されません。

```js
const fruits = ['apple', 'banana', 'pear'];

const returnValue = fruits.push();

console.log(returnValue);
```

```
> 3
```
