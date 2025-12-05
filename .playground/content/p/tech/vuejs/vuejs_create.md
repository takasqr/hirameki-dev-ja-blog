---
title: 【Vue3】vue-cliをインストールして始める
description: Vueはvue-cliを使うことで、簡単にプロジェクトを作成して、デバッグを始めることができます。今回はvue-cliを使ってVueのプロジェクトを立ち上げる方法を紹介します。Vue.jsは一言で言うと、「フロントエンド(ブラウザ)で動く、javascriptのフレームワーク」です。
slug: vuejs_create
category: vuejs
createDate: 2021/10/29
updated: 
cover: 'https://res.cloudinary.com/takasqr/image/upload/l_text:Sawarabi%20Gothic_80_bold:【Vue3】vue-cliをインストールして始める,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: 【Vue3】vue-cliをインストールして始める
recommend: false
---
## はじめに



Vueは`vue-cli`を使うことで、簡単にプロジェクトを作成して、デバッグを始めることができます。

今回は`vue-cli`を使ってVueのプロジェクトを立ち上げる方法を紹介します。


[https://cli.vuejs.org/](https://cli.vuejs.org/)



## Vue.jsとは？

Vue.jsは一言で言うと、「フロントエンド(ブラウザ)で動く、javascriptのフレームワーク」です。

## vue-cliをインストール

```
npm install -g @vue/cli
```

## Vueのプロジェクトを作成

```bash
vue create hello-world
```

vue-cliのバージョンが`v4.5.4`でプロジェクトを作成したところ、Vue3でプロジェクトを作るか聞かれました。

Vue3で作ってみました。

```
? Please pick a preset: Default (Vue 3 Preview) ([Vue 3] babel, eslint)
```

ちなみにvue-cliのバージョンは、

```bash
vue --version
```
で確認できます。

vue-cliのアップデートは、

```bash
npm update -g @vue/cli
```
で行うことができます。

## Vueをデバックする

```bash
cd hello-world
npm run serve
```

`Welcome to Your Vue.js App`と表示されれば成功です。