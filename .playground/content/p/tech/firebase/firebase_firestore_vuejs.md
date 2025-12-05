---
title: Firebase Firestore(v9)とVueでデータを操作する
description: FirebaseのSDKのバージョンが9に変わって実装方法が変わったので記事を書くことにしました。構成はFirebase Authentication(v9)、Vue、Vuetifyです。Vuetifyを使ってない人でもscriptの部分を見てもらえればわかると思います。
slug: firebase_firestore_vuejs
category: firebase
createDate: 2021/10/03
updated: 2021/10/05
cover: 'https://res.cloudinary.com/takasqr/image/upload/l_text:Sawarabi%20Gothic_80_bold:Firebase Firestore(v9)とVueでデータを操作する,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: Firebase Firestore(v9)とVueでデータを操作する
recommend: false
---
## はじめに



FirebaseのSDKのバージョンが9に変わって実装方法が変わったので記事を書くことにしました。



### 構成
* Firebase Authentication(v9)
* Vue
* Vuetify

Vuetifyを使ってない人でも`script`の部分を見てもらえればわかると思います。

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

## Vue.jsとは？

Vue.jsは一言で言うと、「フロントエンド(ブラウザ)で動く、javascriptのフレームワーク」です。



## データ追加
```html
<template>
  <div>
    <v-btn @click="addTask">
      add
    </v-btn>
  </div>
</template>

<script>
import { getFirestore, collection, addDoc } from 'firebase/firestore'

export default {
  data () {
    return {
      id: '001',
      name: 'test'
    }
  },
  methods: {
    addTask () {
      const db = getFirestore()
      const docRef = addDoc(collection(db, 'tasks'), {
        id: this.id,
        name: this.name
      })
      console.log('Document written with ID: ', docRef.id)
    }
  }
}
</script>

```

## データ参照
```html
<template>
  <div>
    <div
      v-for="(task, index) in tasks"
      :key="index"
    >
      {{ task.title }}
    </div>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, collection, query, where, onSnapshot } from 'firebase/firestore'

export default {
  data () {
    return {
      tasks: [
        {
          id: null,
          title: null
        }
      ]
    }
  },
  mounted () {
    const auth = getAuth()

    // login状態が変更されたら
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const db = getFirestore()
        // loginしてたら
        const q = query(collection(db, 'tasks'), where('uid', '==', `${user.uid}`))
        onSnapshot(q, (snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type === 'added') {
              console.log('added: ', change.doc.data())
              this.tasks.push({
                id: change.doc.id,
                title: change.doc.data().name
              })
            }
          })
        })

        this.tasks.splice(0, 1)
      }
    })
  }
}
</script>
```


VueでFirebase Authentication(v9)を使って認証機能を作るにはこちら。

<post-card-small slug="firebase_authentication_vuejs" lang="ja"></post-card-small>