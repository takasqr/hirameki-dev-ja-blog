---
title: Firebase Firestore(v9)とNuxtでデータを操作する
description: FirebaseのSDKのバージョンが9に変わって実装方法が変わったので記事を書くことにしました。構成はFirebase Authentication(v9)、Nuxt、Vuetifyです。Vuetifyを使ってない人でもscriptの部分を見てもらえればわかると思います。
slug: firebase_firestore_nuxtjs
category: firebase
createDate: 2021/10/03
updated: 2021/10/05
cover: 'https://res.cloudinary.com/takasqr/image/upload/l_text:Sawarabi%20Gothic_80_bold:Firebase Firestore(v9)とNuxtでデータを操作する,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: Firebase Firestore(v9)とNuxtでデータを操作する
recommend: false
---
## はじめに



FirebaseのSDKのバージョンが9に変わって実装方法が変わったので記事を書くことにしました。



### 構成
* Firebase Authentication(v9)
* Nuxt
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

## Nuxt.jsとは？

Nuxt.jsは一言で言うと、「Vue.jsを元にして作られた、javascriptのフレームワーク」です。


## Firebaseを初期化
Firebaseを使うためには、初期化処理を行う必要があります。

pluginsディレクトリに`firebase.js`を作成し、登録します。

```js[firebase.js]
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyDf9wc8MCB3H_gmvQbxsuBTo5QCadRu8tg',
  authDomain: 'litely-f6e0d.firebaseapp.com',
  projectId: 'litely-f6e0d',
  storageBucket: 'litely-f6e0d.appspot.com',
  messagingSenderId: '400014490635',
  appId: '1:400014490635:web:47198f41e8f33d603e5b0e',
  measurementId: 'G-9Z9X0FJZRL'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app)
```

```js[nuxt.config.js]
export default {
  plugins: [
    { src: '~/plugins/firebase.js', mode: 'client' }
  ]
}
```



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

NuxtでFirebase Authentication(v9)を使って認証機能を作るにはこちら。

<post-card-small slug="firebase_authentication_nuxtjs" lang="ja"></post-card-small>