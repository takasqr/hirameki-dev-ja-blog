---
title: Google タグマネージャーを通して Google アナリティクスのタグを配信する
description: Google タグマネージャーではタグを配信できる。タグとは html タグのことでソースコードを編集しなくてもトラッキングタグなどを配信できるところが便利。Google アナリティクスなどメジャーなサービスとの連携はテンプレート化されていて簡単に追加できる。
slug: gtm-via-google-analytics-tags
category: gtm
createDate: 2024/04/26
updated: 
cover: 'https://res.cloudinary.com/t8/image/upload/l_text:Sawarabi%20Gothic_80_bold:Google タグマネージャーを通して Google アナリティクスのタグを配信する,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: Google タグマネージャーを通して Google アナリティクスのタグを配信する
recommend: true
homepage: true
---

Google タグマネージャーではタグを配信できる。タグとは html タグのことでソースコードを編集しなくてもトラッキングタグなどを配信できるところが便利。Google アナリティクスなどメジャーなサービスとの連携はテンプレート化されていて簡単に追加できる。

以下は Google タグマネージャー本体のタグが設定されていることが前提となります。

## Google アナリティクスでの作業

1. Google アナリティクスのアカウントを作る
1. Google アナリティクスのプロパティを作る
1. Google アナリティクスにログインして、データストリームを作る。
1. データストリームの種類は「Web」を選択する。
1. ストリーム名はなんでも良いが、ここではウェブサイトの URL を入力する。
1. 測定 ID をメモしておく

## Google タグマネージャーでの作業

1. Google タグマネージャーにログインする
1. コンテナを選択する
1. 「タグ」を選択する。画面左
1. 「新規」を選択する。画面右上
1. 「タグの設定」を選択する。画面左上
1. 「タグタイプを選択」のおすすめから「Google アナリティクス」を選択する
1. 「Google タグ」を選択する
1. Google アナリティクスでメモした「測定 ID」を「タグ ID」に入力する
1. トリガーを「All Pages」に設定する
1. 設定を保存する
1. タグの設定が完了したら公開する


Google アナリティクスで Web サイトへのアクセスを確認できれば設定完了。
