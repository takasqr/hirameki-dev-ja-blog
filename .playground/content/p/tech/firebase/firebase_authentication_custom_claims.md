---
title: 【Firebase】カスタムクレーム(Custom Claims)で管理者ユーザーを作る
description: 特定のユーザーだけ、Firestore、Firebase strageのアクセス権限を強くしたい。特定のユーザーだけアクセスできるページを作りたい。といった、Authenticationのユーザーにラベルを付けたい時にFirebase Admin SDKのクレームを使うと便利です。
slug: firebase_authentication_custom_claims
category: firebase
createDate: 2021/09/15
updated: 
cover: 'https://res.cloudinary.com/takasqr/image/upload/l_text:Sawarabi%20Gothic_60_bold:【Firebase】カスタムクレーム(Custom Claims)で管理者ユーザーを作る,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: 【Firebase】カスタムクレーム(Custom Claims)で管理者ユーザーを作る
recommend: false
---
## はじめに



* 特定のユーザーだけ、Firestore、Firebase strageのアクセス権限を強くしたい
* 特定のユーザーだけアクセスできるページを作りたい

といった、Authenticationのユーザーにラベルを付けたい時に`Firebase Admin SDK`のクレームを使うと便利です。



## 導入
カスタムクレームをセットする。

```js
admin
  .auth()
  .setCustomUserClaims(uid, { admin: true })
  .then(() => {
    // 
  });

```
例だと`Admin`というクレームに対して`true`を設定しています。

クライアントで取得するには、

```js
firebase.auth().currentUser.getIdTokenResult()
  .then((idTokenResult) => {
     // Confirm the user is an Admin.
     if (idTokenResult.claims.admin) {
       // adminがtrueだったら
     } else {
       // adminがfalseだったら
     }
  })
  .catch((error) => {
    console.log(error);
  });

```

セキュリティルールの例。


```[firestore.rules]
match /test/{test} {
      allow read: if request.auth.token.admin == true;
      allow create: if request.auth.uid != null;
    }
```

これはtestコレクションにFirebase Authのユーザーならだれでもデータを作ることができる。だが、データを読み取るにはadminクレームを持っているユーザーじゃなければならない。

という例。



## 応用
Firestoreにuidを登録すると、自働的にカスタムクレームを登録してくれる関数です。
Firebase Functionsにデプロイします。

```js[CustomClaimsEx.js]
const functions = require('firebase-functions')
const admin = require('firebase-admin')

exports.set = async function (uid, claims) {
  let returnValue = null
  const user = await admin.auth().getUser(uid)
  const updatedClaims = user.customClaims || {}

  for (const property in claims) {
    if (Object.prototype.hasOwnProperty.call(claims, property)) {
      updatedClaims[property] = claims[property]
    }
  }
  await admin.auth().setCustomUserClaims(uid, updatedClaims)
    .then(function () {
      returnValue = Promise.resolve(true)
    })
    .catch((error) => {
      functions.logger.error(error)
      returnValue = Promise.resolve(false)
    })
  return returnValue
}
```

```js[setAdminClaim.js]
const functions = require('firebase-functions')
const CustomClaimsEx = require('./CustomClaimsEx')

exports.setAdminClaim = functions.firestore
  .document('adminClaims/{adminClaimsId}')
  .onCreate(async (snap, context) => {
    CustomClaimsEx.set(snap.data().uid, { admin: true })
  })
```

```js[unsetAdminClaim.js]
const functions = require('firebase-functions')
const CustomClaimsEx = require('./CustomClaimsEx')

exports.unsetAdminClaim = functions.firestore
  .document('adminClaims/{adminClaimsId}')
  .onDelete(async (snap, context) => {
    CustomClaimsEx.set(snap.data().uid, { admin: false })
  })
```

[カスタム クレームとセキュリティ ルールによるアクセスの制御 | Firebase](https://firebase.google.com/docs/auth/admin/custom-claims?hl=ja)