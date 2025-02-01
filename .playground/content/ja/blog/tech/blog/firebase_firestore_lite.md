---
title: Firestore Liteとは？
description: FirebaseのJavascript SDKにFirestore Liteなるものが追加されるそうです。Firebaseの公式Youtubeチャンネルで紹介されていました。新しく追加されるFirestore Liteは、「ライブラリの要領の80パーセント近くの軽量化」が実現できるそうです。
slug: firebase_firestore_lite
category: firebase
createDate: 2021/08/16
updated: 
cover: 'https://res.cloudinary.com/takasqr/image/upload/l_text:Sawarabi%20Gothic_80_bold:Firestore Liteとは,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: Firestore Liteとは？
recommend: false
---
## Firestore Liteって何?



FirebaseのJavascript SDKにFirestore Liteなるものが追加されるそうです。
Firebaseの公式Youtubeチャンネルで紹介されていました。

新しく追加されるFirestore Liteは、

* ライブラリの要領の80パーセント近くの軽量化

が実現できるそうです。

その代わり、

* リアルタイムストリーミングができない
* オフライン永続化ができない

の制約があります。

::self-introduction
::

## 使ってみるには

ライブラリをインストールします。

```bash
npm i firebase@exp
```
expタグを使います。

```javascript

import { initializeApp } from 'firebase/app'
import { initializeFirestore, getDocs } from 'firebase/firestore/lite'

const firebaseApp = initializeApp({ /* config */ })
const firestoreLite = initializeFirestore(firebaseApp)
const docs = await getDocs(firestoreLite, 'testDocs')
```
このような感じで呼び出すみたいです。



## 参考

[Reducing bundle size: Previewing a new Firebase for the web | Session](https://www.youtube.com/watch?v=r5eJQ3nPc6A)
