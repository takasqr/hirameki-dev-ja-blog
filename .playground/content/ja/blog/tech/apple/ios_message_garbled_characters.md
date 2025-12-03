---
title: iPhone のメッセージアプリでメールが文字化けする【開発者向け】
description: ユーザーから、サービスからのメールが文字化けすると連絡あった。メッセージ欄に「Attachment.html」と表示され、タップすると中身が文字化けしている。メールの Content を html でしか提供していなかったのが原因。
slug: ios_message_garbled_characters
category: apple
createDate: 2024/04/24
updated: 
cover: 'https://res.cloudinary.com/takasqr/image/upload/l_text:Sawarabi%20Gothic_80_bold:iPhone のメッセージアプリでメールが文字化けする【開発者向け】,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: iPhone のメッセージアプリでメールが文字化けする【開発者向け】
recommend: true
---


::self-introduction
::



ユーザーから、サービスからのメールが文字化けすると連絡あった。

## 環境
- iPhone
- メッセージアプリ
- キャリアメール

メッセージ欄に「Attachment.html」と表示され、タップすると中身が文字化けしている。

## 原因

メールの Content を html でしか提供していなかったのが原因。text と html 両方を提供するマルチパートメールにして送信すると解決した。

iPhone のメッセージアプリは基本的に text を想定して作られているよう。

「メッセージ」ではなく、「メール」アプリであれば、html を表示できる。だが、html だけでなく、text も対応していた方がメール配信者としてのスコアが上がるらしいので、両方に対応しておくことにこしたことはないと思われる。