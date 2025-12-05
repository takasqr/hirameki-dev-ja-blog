---
title: Nuxt3 プロジェクトをテンプレートから立ち上げる
description: 私は仕事でもプライベートでも Nuxt をよく使います。プロジェクトを立ち上げるたびに、Nuxt プロジェクトの作り方を調べて、ライブラリをインストールするのがめんどくさかったので自分用のテンプレートプロジェクトを作りました。非常に簡単でした。
slug: nuxtjs_template_project
category: nuxtjs
createDate: 2024/05/15
updated: 
cover: 'https://res.cloudinary.com/takasqr/image/upload/l_text:Sawarabi%20Gothic_80_bold:Nuxt3 プロジェクトをテンプレートから立ち上げる,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: Nuxt3 プロジェクトをテンプレートから立ち上げる
recommend: true
---

私は仕事でもプライベートでも Nuxt をよく使います。

プロジェクトを立ち上げるたびに、Nuxt プロジェクトの作り方を調べて、ライブラリをインストールするのがめんどくさかったので自分用のテンプレートプロジェクトを作りました。

出来上がりは[ここ](https://github.com/takasqr/nuxt-template)にあります。

非常に簡単でした。



## 作り方

1. Nuxt のテンプレート用プロジェクトを作る
2. ライブラリもインストールする
3. GitHub にアップロードする

これだけです。

テンプレート用の特別な設定などは必要ありません。
今回はプロジェクト名は`nuxt-template`としました。

## 使い方

使い方は`nuxi`コマンドでプロジェクトを作るときに、GitHub のリポジトリを指定します。

```bash
npx nuxi init -t gh:takasqr/nuxt-template myProject
```


## 参考

[nuxi init | Nuxt](https://nuxt.com/docs/api/commands/init)

[GitHub - takasqr/nuxt-template: 自分用 Nuxt テンプレートプロジェクト](https://github.com/takasqr/nuxt-template)


