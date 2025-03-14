---
title: 【hooks対応版】Firebase Firestore(v9)とNextでデータを操作する
description: はじめに FirebaseのSDKのバージョンが9に変わって実装方法が変わったので記事を書くことにしました。構成はFirebase Authentication(v9)、Nextです。Firebaseを使うためには、初期化処理を行う必要があります。
slug: firebase_firestore_nextjs
category: firebase
createDate: 2021/11/01
updated: 
cover: 'https://res.cloudinary.com/takasqr/image/upload/l_text:Sawarabi%20Gothic_80_bold:【hooks対応版】Firebase Firestore(v9)とNextでデータを操作する,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: 【hooks対応版】Firebase Firestore(v9)とNextでデータを操作する
recommend: false
---
## はじめに



FirebaseのSDKのバージョンが9に変わって実装方法が変わったので記事を書くことにしました。

<img src="https://firebasestorage.googleapis.com/v0/b/litely-f6e0d.appspot.com/o/post%2Ftech%2Ffirebase%2Fguide%2FF6A41E5C-28F6-45C2-9086-2D08647F1597_600x600.png?alt=media"></img>

::self-introduction
::

### 構成
* Firebase Authentication(v9)
* Next

## Cloud Firestoreとは？
Cloud Firestoreは、一言で言うと「NoSQLのDBを簡単に作ることが出来るクラウドサービス」です。

Cloud FirestoreはFirebaseというクラウドサービス群の一つです。そして、Firebaseは現在Googleによって運営されています。

### できる事
Firebaseのプロジェクト上にDBを作って管理していくことができます。

### 料金

* 書き込み 20,000件/日
* 読み込み 50,000件/日


まで無料で使うことができます。

[料金プラン | Firebase](https://firebase.google.com/pricing?hl=ja)

## Firebaseを初期化
Firebaseを使うためには、初期化処理を行う必要があります。

```js[index.js]
import Head from 'next/head'

import FirestoreAddButton from '../src/firebase/FirestoreAddButton';
import FirestoreList from '../src/firebase/FirestoreList';

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDf9wc8MCB3H_gmvQbxsuBTo5QCadRu8tg',
  authDomain: 'litely-f6e0d.firebaseapp.com',
  projectId: 'litely-f6e0d',
  storageBucket: 'litely-f6e0d.appspot.com',
  messagingSenderId: '400014490635',
  appId: '1:400014490635:web:47198f41e8f33d603e5b0e',
  measurementId: 'G-9Z9X0FJZRL'
}

console.log('firebase')
initializeApp(firebaseConfig);

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <FirestoreAddButton />
        <FirestoreList />
      </main>
    </div>
  )
}
```



## データ追加
```js[FirestoreAddButton.js]
import { getFirestore, collection, addDoc } from 'firebase/firestore'

const clickButton = () => {
  const id = '003'
  const name = 'test'
  const uid = ''

  const db = getFirestore()
  const docRef = addDoc(collection(db, 'tasks'), {
    uid: uid,
    id: id,
    name: name
  })
  console.log('Document', docRef)
}

function FirestoreAddButton() {
  return (
    <div>
      <button onClick={clickButton}>Firestore追加</button>
    </div>
  );
}
  
export default FirestoreAddButton;
```

## データ参照
```js[FirestoreList.js]
import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, collection, query, where, onSnapshot } from 'firebase/firestore'

function FirestoreList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const auth = getAuth()
  
    // login状態が変更されたら
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const db = getFirestore()
        // loginしてたら
        let tasks = []
        const q = query(collection(db, 'tasks'), where('uid', '==', `${user.uid}`))
        onSnapshot(q, (snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type === 'added') {
              console.log('added: ', change.doc.data())
              tasks.push({
                id: change.doc.id,
                name: change.doc.data().name
              })
              console.log(tasks)
            }
          })
          setTasks(tasks)
        })
      }
    })
  }, []);

  return (
    <div>
      {tasks.map(val => (
        <div key={val.name}>{val.name}</div>
      ))}
    </div>
  );
}
  
export default FirestoreList;

```
<img src="https://firebasestorage.googleapis.com/v0/b/litely-f6e0d.appspot.com/o/post%2Ftech%2Ffirebase%2Fguide%2FF6A41E5C-28F6-45C2-9086-2D08647F1597_600x600.png?alt=media"></img>

NextでFirebase Authentication(v9)を使って認証機能を作るにはこちら。

<post-card-small slug="firebase_authentication_nextjs" lang="ja"></post-card-small>