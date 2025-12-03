---
title: firebaseに入門して一年後の使い方
description: 仕事でもプライベートでもFirebaseを使うようになって1年が経ちました。自分が一通りチュートリアルが終わった後に、知りたかったアイデアや考え方をまとめました。サンプルコードはjavascriptです。
slug: firebase_after_the_tutorial
category: firebase
createDate: 2021/09/08
updated: 
cover: 'https://res.cloudinary.com/takasqr/image/upload/l_text:Sawarabi%20Gothic_80_bold:firebaseに入門して一年後の使い方,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: firebaseに入門して一年後の使い方
recommend: false
---
## はじめに



仕事でもプライベートでもFirebaseを使うようになって1年が経ちました。自分が一通りチュートリアルが終わった後に、知りたかったアイデアや考え方をまとめました。サンプルコードはjavascriptです。

※まだまだ書きたい事がありますが、時間がなくなってしまったので次回書き足したいと思います。

::self-introduction
::

## Firebase Functions
### 環境変数
Firebase Functionsではパスワードなどのハードコーディングしたくない情報を環境変数に格納することができます。

環境変数を設定する。
```bash
firebase functions:config:set service.id="123456789" service.pass="987654321"

```

現在の環境変数一覧を取得する。
```bash
firebase functions:config:get
```

結果が返ってきます。
```json
{
  "service": {
    "id": "123456789",
    "pass": "987654321"
  }
}
```

環境変数を削除する。
```
firebase functions:config:unset service.id service.pass
```

環境変数を使う。

```js
const functions = require('firebase-functions');

exports.userCreated = functions.database.ref('/users/{id}').onWrite(event => {
  //
  console.log(functions.config().service.id)
  console.log(functions.config().service.pass)
});

```



### ログ
Firebase Functionsのログは`console.log()`で出力することもできますが、`console.error()`でエラーとして出すことができなかったりと制約があります。

`functions.logger.log()`を使うことで、いい感じに出力することができます。

```js
  const functions = require("firebase-functions");

  functions.logger.log("log:", someObj);
  functions.logger.error("error:", someObj);

```

### スケジュール実行をテストする
Firebase Functionsのスケジュール実行は便利ですが、テストする時に設定した時間まで待たなければならない部分がデバックしづらい。

でも実は`Google Cloud Platform(GCP)`の`Cloud Scheduler`にFirebase Functionsのスケジュールが登録されている。そして`GCP`の`Cloud Scheduler`には「今すぐ実行」のボタンがある。

開発する時は非常に便利。

## Firebase Authentication
### 権限管理
* 特定のユーザーだけ、Firestore、Firebase strageのアクセス権限を強くしたい
* 特定のユーザーだけアクセスできるページを作りたい

といった、Authenticationのユーザーにラベルを付けたい時に`Firebase Admin SDK`のクレームを使うと便利です。

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

[カスタム クレームとセキュリティ ルールによるアクセスの制御 | Firebase](https://firebase.google.com/docs/auth/admin/custom-claims?hl=ja)

## Firebase Hosting
### GitHubからの自動デプロイ
Firebaseは公式にGitHubからの自動デプロイをサポートしています。

新たなプロジェクトに自動デプロイを追加する。

```bash
firebase init hosting
```


既にあるプロジェクトに自動デプロイを追加する。

```bash
firebase init hosting:github
```
[GitHubプルリクエストを介してライブチャンネルとプレビューチャンネルにデプロイする](https://firebase.google.com/docs/hosting/github-integration)

## さいごに
次回以降に書きたい事。

* Stripe 決済
* Firestore、storage セキュリティルール
* Hosting 複数サイトをデプロイ
* Functions デプロイリージョン
* Functions メモリ、タイムアウト
* 拡張機能
