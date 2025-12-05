---
title: Firebase Authentication(v9)とNuxtで認証機能を実装する
description: FirebaseのSDKのバージョンが9に変わって実装方法が変わったので記事を書くことにしました。 構成はFirebase Authentication(v9)、Nuxt、Vuetifyです。Vuetifyを使ってない人でもscriptの部分を見てもらえればわかると思います。
slug: firebase_authentication_nuxtjs
category: firebase
createDate: 2021/10/02
updated: 2021/10/05
cover: 'https://res.cloudinary.com/takasqr/image/upload/l_text:Sawarabi%20Gothic_80_bold:Firebase Authentication(v9)とNuxtで認証機能を実装する,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: Firebase Authentication(v9)とNuxtで認証機能を実装する
recommend: false
---
## はじめに



FirebaseのSDKのバージョンが9に変わって実装方法が変わったので記事を書くことにしました。



### 構成
* Firebase Authentication(v9)
* Nuxt
* Vuetify

Vuetifyを使ってない人でも`script`の部分を見てもらえればわかると思います。

## Firebase Authenticationとは？
Firebase Authenticationは、一言で言うと「ログイン機能を簡単に作ることが出来るクラウドサービス」です。

Firebaseは現在Googleによって運営されています。

### できる事
Firebase上にユーザーを作って管理していくことができます。

ログイン方法は、

* メールアドレス
* Googleアカウント
* Twitterアカウント
* Microsoftアカウント
* Gitgubアカウント
* Appleアカウント
* Facebookアカウント
* 電話番号認証
* カスタム認証
* 匿名認証

と豊富にあります。


また、ユーザーに「管理者ユーザー」、「一般ユーザー」等のラベル付けすることもできます。

[【Firebase】カスタムクレーム(Custom Claims)で管理者ユーザーを作る | ライトリ](https://litely.net/post/tech/firebase/guide/custom_claims/)

### 料金
電話認証以外は無料で使うことができます。

[料金プラン | Firebase](https://firebase.google.com/pricing?hl=ja)


### メリット

FirebaseはGoogleのサービスなので、ほとんどの人にとってセキュリティは上がると思います。ほかにもFirebase Authentication公式ライブラリがあるので、自分で作るより開発工数を短縮することができます。

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



## ユーザー作成
```vue
<template>
  <div>
    <v-btn @click="SignUp">
      ユーザー作成
    </v-btn>
  </div>
</template>
<script>
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth'

export default {
  data () {
    return {
      emailAddress: 'test@example.com',
      password: 'Password',
    }
  },
  methods: {
    SignUp () {
      const auth = getAuth()
      createUserWithEmailAndPassword(auth, this.emailAddress, this.password)
        .then((userCredential) => {
          console.log('user created')
        })
        .catch((error) => {
          alert(error.message)
          console.error(error)
        })
    }
  }
}
</script>
```

## ログイン

```html
<template>
  <div>
    <v-btn
      @click="SignIn"
    >
      ログイン
    </v-btn>
  </div>
</template>
<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
export default {
  methods: {
    SignIn () {
      try {
        const auth = getAuth();

        signInWithEmailAndPassword(auth, this.emailAddress, this.password)
          .then((user) => {
            console.log('ログイン成功')
          })
          .catch((error) => {
            console.error(error)
          })
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>
```

## Googleアカウント

googleアカウントでログインするコードです。

```html
<template>
  <div>
    <v-btn
      @click="SignInGoogle"
    >
      Googleアカウントでログイン
    </v-btn>
  </div>
</template>
<script>
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
export default {
  data () {
    return {
      emailAddress: 'test@example.com',
      password: 'Password',
    }
  },
  methods: {
    SignInGoogle () {
      const provider = new GoogleAuthProvider()

      const auth = getAuth()
      signInWithPopup(auth, provider)
        .then((result) => {
          this.$router.push({ path: '/' })
        }).catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>
```

## ログアウト

```vue
<template>
  <div>
    <v-btn @click="signout">
    signout
    </v-btn>
  </div>
</template>
<script>
import { getAuth, signOut } from 'firebase/auth'

export default {
  methods: {
    signout () {
      const auth = getAuth()
      signOut(auth).then(() => {
        // Sign-out successful.
        alert('サインアウトしました。')
      }).catch((error) => {
        // An error happened.
        console.error(error)
      })
    }
  }
}
</script>
```

NuxtでFirestore(v9)を操作するにはこちら。

<post-card-small slug="firebase_firestore_nuxtjs" lang="ja"></post-card-small>