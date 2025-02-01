---
title: Firebase メール送信拡張機能でマルチパートメールを送信する
description: 以下のように`text`と`html`両方に値を設定すると、自動的にマルチパートメールにメールヘッダーが設定されていました。拡張機能が自動的に処理してくれているようです。SendGrid で試しました。
slug: firebase_firestore_send_email_multipart
category: firebase
createDate: 2024/04/24
updated: 
cover: 'https://res.cloudinary.com/takasqr/image/upload/l_text:Sawarabi%20Gothic_80_bold:Firebase メール送信拡張機能でマルチパートメールを送信する,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: Firebase メール送信拡張機能でマルチパートメールを送信する
recommend: true
---


::self-introduction
::

気になったので試してみました。

以下のように`text`と`html`両方に値を設定すると、自動的にマルチパートメールにメールヘッダーが設定されていました。

拡張機能が自動的に処理してくれているようです。

SendGrid で試しました。


```js
to: ['someone@example.com'],
message: {
  subject: 'Hello from Firebase!',
  text: 'This is the plaintext section of the email body.',
  html: 'This is the <code>HTML</code> section of the email body.',
}
```


## 参考

[Trigger Email 拡張機能の使用  |  Firebase Extensions](https://firebase.google.com/docs/extensions/official/firestore-send-email?hl=ja)