---
title: javascriptのunshiftメソッドをわかりやすく説明する
description: javascriptのunshiftメソッドについて噛み砕いて説明します。unshiftメソッドとはunshiftはjavascriptのメソッドです。どのようなメソッドかというと、配列の最初に要素を追加する、追加した後の配列の長さを返すという特徴があります。
slug: javascript_unshift
category: javascript
createDate: 2021/07/12
updated: 2021/08/22
cover: 'https://res.cloudinary.com/takasqr/image/upload/l_text:Sawarabi%20Gothic_80_bold:javascriptのunshiftメソッドをわかりやすく説明する,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: javascriptのunshiftメソッドをわかりやすく説明する
recommend: false
---
## はじめに



javascriptのunshiftメソッドについて噛み砕いて説明します。

::self-introduction
::

## unshiftメソッドとは何か
`unshift`はjavascriptのメソッドです。
どのようなメソッドかというと、

* 配列の最初に要素を追加する
* 追加した後の配列の長さを返す

という特徴があります。

## unshiftメソッドの書き方
unshiftメソッドは下のように書きます。

```
[配列].unshift([追加したい値1], [追加したい値1])
```


## unshiftは配列の最初に追加する

配列とはひとまとまりのデータを一つの変数に格納するためのデータの型です。

```js
const fruits = ['apple', 'banana', 'pear', 'melon', 'watermelon'];

```
のような感じで表現します。

unshiftメソッドは配列の最初に要素を追加します。

例えば、下のようなコードがあったとします。


```js
const fruits = ['apple', 'banana', 'pear'];

console.log('unshiftメソッド実行前')
console.log(fruits);

fruits.unshift('watermelon', 'melon');

console.log('unshiftメソッド実行後')
console.log(fruits);

```
実行すると、

```js
> "unshiftメソッド実行前"
> Array ["apple", "banana", "pear"]
> "unshiftメソッド実行後"
> Array ["watermelon", "melon", "apple", "banana", "pear"]
```
このように値が返ってくると思います。

`"watermelon"`と`"melon"`が増えていますね。

## unshiftの戻り値について
戻り値とは、メソッドが実行された後に返される値のことです。

例えば、

```js
const fruits = ['apple', 'banana', 'pear'];

const returnValue = fruits.unshift('watermelon', 'melon');

console.log(returnValue);
```

のような感じで書きます。
例ではunshiftメソッドの戻り値を`returnValue`に入れて、出力しています。

要素を追加した後の要素数である`5`が出力されると思います。

```
> 5
```
## unshiftの使い道
配列に値を追加する時に使うことができます。

## さいごに
引数を設定しなくてもエラーにはなりませんが、配列には何も追加されません。

```js
const fruits = ['apple', 'banana', 'pear'];

const returnValue = fruits.unshift();

console.log(returnValue);
```

```
> 3
```
