---
title: 【Nuxt】create-nuxt-appをインストールして始める
description: Nuxtはcreate-nuxt-appを使うことで、簡単にプロジェクトを作成して、デバッグを始めることができます。今回はcreate-nuxt-appを使ってRecatのプロジェクトを立ち上げる方法を紹介します。
slug: nuxtjs_create_app
category: nuxtjs
createDate: 2021/10/29
updated: 
cover: 'https://res.cloudinary.com/takasqr/image/upload/l_text:Sawarabi%20Gothic_80_bold:【Nuxt】create-nuxt-appをインストールして始める,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: 【Nuxt】create-nuxt-appをインストールして始める
recommend: false
---
## はじめに



Nuxtは`create-nuxt-app`を使うことで、簡単にプロジェクトを作成して、デバッグを始めることができます。

今回は`create-nuxt-app`を使ってNuxtのプロジェクトを立ち上げる方法を紹介します。

::self-introduction
::

## Nuxtのプロジェクトを作成

```bash
npx create-nuxt-app nuxt-app
```

質問には下のように答えました。

VuetifyやJestを一緒にインストールしています。
```
✨  Generating Nuxt.js project in nuxt-app
? Project name: nuxt-app
? Programming language: TypeScript
? Package manager: Npm
? UI framework: Vuetify.js
? Nuxt.js modules: (Press <space> to select, <a> to toggle all, <i> to invert selection)
? Linting tools: ESLint
? Testing framework: Jest
? Rendering mode: Single Page App
? Deployment target: Static (Static/Jamstack hosting)
? Development tools: jsconfig.json (Recommended for VS Code if you're not using typescript)
? Continuous integration: None
? Version control system: Git
```

## Nuxtをデバックする

```bash
cd nuxt-app
npm run dev
```
`Nuxt`のロゴが表示されれば成功です。