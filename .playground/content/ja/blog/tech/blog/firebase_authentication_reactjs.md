---
title: Firebase Authentication(v9)とReactで認証機能を実装する
description: FirebaseのSDKのバージョンが9に変わって実装方法が変わったので記事を書くことにしました。 Firebase Authentication(v9) 、Reactです。Firebaseを使うためには、初期化処理を行う必要があります。
slug: firebase_authentication_reactjs
category: firebase
createDate: 2021/11/01
updated: 
cover: 'https://res.cloudinary.com/takasqr/image/upload/l_text:Sawarabi%20Gothic_80_bold:Firebase Authentication(v9)とReactで認証機能を実装する,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: Firebase Authentication(v9)とReactで認証機能を実装する
recommend: false
---
## はじめに



FirebaseのSDKのバージョンが9に変わって実装方法が変わったので記事を書くことにしました。

<img src="https://firebasestorage.googleapis.com/v0/b/litely-f6e0d.appspot.com/o/post%2Ftech%2Ffirebase%2Fguide%2F1AF39DFC-96FC-4228-8132-0BC4FAE64257_600x600.png?alt=media"></img>

::self-introduction
::

### 構成
* Firebase Authentication(v9)
* React

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

## React.jsとは？

React.jsは一言で言うと、「フロントエンド(ブラウザ)で動く、javascriptのフレームワーク」です。

## Firebaseを初期化
Firebaseを使うためには、初期化処理を行う必要があります。

```js[index.js]
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FirebaseAuthSigninButton from './firebase/FirebaseAuthSigninButton';
import FirebaseAuthSignupButton from './firebase/FirebaseAuthSignupButton';
import FirebaseAuthGoogleButton from './firebase/FirebaseAuthGoogleButton';
import FirebaseAuthSignoutButton from './firebase/FirebaseAuthSignoutButton';
import reportWebVitals from './reportWebVitals';

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

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAuthSignupButton />
    <FirebaseAuthSigninButton />
    <FirebaseAuthGoogleButton />
    <FirebaseAuthSignoutButton />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
```



## ユーザー作成
```js[FirebaseAuthSignupButton.js]
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const clickButton = () => {
  const emailAddress = 'test@example.com'
  const password = 'Password'

  const auth = getAuth()
  createUserWithEmailAndPassword(auth, emailAddress, password)
    .then((userCredential) => {
      console.log('user created')
    })
    .catch((error) => {
      alert(error.message)
      console.error(error)
    })
}

function FirebaseAuthSignupButton() {
  return (
    <div>
      <button onClick={clickButton}>ユーザー作成</button>
    </div>
  );
}
  
export default FirebaseAuthSignupButton;
```

## ログイン

```js[FirebaseAuthSigninButton.js]
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const clickButton = () => {
  try {
    const auth = getAuth();
    const emailAddress = 'test@example.com'
    const password = 'Password'

    signInWithEmailAndPassword(auth, emailAddress, password)
      .then((user) => {
        console.log('ログイン成功', user)
      })
      .catch((error) => {
        console.error(error)
      })
  } catch (e) {
    console.error(e)
  }
}

function FirebaseAuthSigninButton() {
  return (
    <div>
      <button onClick={clickButton}>ログイン</button>
    </div>
  );
}

export default FirebaseAuthSigninButton;

```

## Googleアカウント

googleアカウントでログインするコードです。

```js[FirebaseAuthGoogleButton.js]
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const clickButton = () => {
  const provider = new GoogleAuthProvider()

  const auth = getAuth()
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log('Googleアカウントでログインしました。')
    }).catch((error) => {
      console.error(error)
    })
}

function FirebaseAuthGoogleButton() {
  return (
    <div>
      <button onClick={clickButton}>Googleアカウントでログイン</button>
    </div>
  );
}

export default FirebaseAuthGoogleButton;

```

## ログアウト

```js[FirebaseAuthSignoutButton.js]
import { getAuth, signOut } from 'firebase/auth'

const clickButton = () => {
  const auth = getAuth()
  signOut(auth).then(() => {
    // Sign-out successful.
    alert('サインアウトしました。')
  }).catch((error) => {
    // An error happened.
    console.error(error)
  })
}

function FirebaseAuthSignoutButton() {
  return (
    <div>
      <button onClick={clickButton}>ログアウト</button>
    </div>
  );
}
  
export default FirebaseAuthSignoutButton;
```
<img src="https://firebasestorage.googleapis.com/v0/b/litely-f6e0d.appspot.com/o/post%2Ftech%2Ffirebase%2Fguide%2F1AF39DFC-96FC-4228-8132-0BC4FAE64257_600x600.png?alt=media"></img>

ReactでFirestore(v9)を操作するにはこちら。

<post-card-small slug="firebase_firestore_reactjs" lang="ja"></post-card-small>