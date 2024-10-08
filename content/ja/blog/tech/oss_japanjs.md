---
title: ツリーシェイキングな JavaScript ライブラリを作った話
description: カナ変換、都道府県の一覧データなど、日本特有のめんどくさい実装を肩代わりするライブラリを作りました。
slug: oss_japanjs
category: javascript
createDate: 2024/02/28
updated: 
cover: '/thumbnail/oss_japanjs.jpg'
alt: ツリーシェイキングな JavaScript ライブラリを作った話
recommend: true
---

## 何を作ったのか？

カナ変換、都道府県の一覧データなど、日本特有のめんどくさい実装を肩代わりするライブラリを作りました。

[JapanJS](https://japanjs.org)

::self-introduction
::

## 特徴

一番の特徴はツリーシェイキングなライブラリであることです。「日本特有のめんどくさい実装」と言ってもジャンルが全く違うので、ビルド時に全部のコードが含まれるのは好ましくありません。ツリーシェイキングなライブラリとして実装することで、使用しているコードのみビルドに含めることができます。

## 使い方

例えば、都道府県一覧を取得するコードです。

```js
import { prefectures } from 'japanjs'

console.log(prefectures)
// [
//   { name: '北海道' },
//   { name: '青森' },
//   { name: '岩手' },
//   { name: '宮城' },
//   { name: '秋田' },
//   ...
// ]
```