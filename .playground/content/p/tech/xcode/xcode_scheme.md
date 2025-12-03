---
title: Xcode で Scheme を設定して実行モードを分ける
description: デバッグやテストを実行する時に、Swift の挙動を変えたい時があると思います。API の接続先などです。Scheme を使うことで実現できます。
slug: xcode_scheme
category: xcode
createDate: 2024/04/03
updated: 
cover: 'https://res.cloudinary.com/takasqr/image/upload/l_text:Sawarabi%20Gothic_80_bold:XcodeでSchemeを設定して実行モードを分ける,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: Xcode で Scheme を設定して実行モードを分ける
recommend: true
homepage: true
---

デバッグやテストを実行する時に、Swift の挙動を変えたい時があると思います。API の接続先などです。

Scheme を使うことで実現できます。

## 新しい Scheme を作る

1. Product、Schemes、Manage Schemes...と進んでいく
2. Scheme を新しく作る
3. Run の Executable にアプリを指定することでデバッグ実行できるようになる

追加する際に Shared にチェックを入れると Git に含めることができる。

あるスキームの時だけ、挙動を変えるコード



## Build Configuration

1. プロジェクトツリーのルートをクリックして
1. PROJECT を選択
1. info を選択
1. Configurations から追加（Debug か Release からコピーする）


## Active Compilation Conditions

1. プロジェクトツリーのルートをクリックして
1. TARGETS を選択
1. Build Settings を選択
1. 検索窓に「Active Compilation Conditions」と入力
1. Build Configuration で作った名前で登録されているので、Debug か Release から値を変更する

## スキームの Build Configuration を設定する

1. Manage Schemes から Scheme の設定画面にいく
1. Build Configuration から先ほど作った Build Configuration を選択


## Swift で条件分岐

下のようなコードで条件分岐する。

```swift
#if NEWDEBUG
    print("NEWDEBUG")
#endif
```
