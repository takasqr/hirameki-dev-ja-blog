---
title: Vue Routerとは？使い方を一通り説明する
description: Vue Routerとは、Vue公式のルーターです。Vue Routerと使うことで、ページを作成、作ったページにURLを設定(動的も可)、コンポーネント内で画面遷移、GETのパラメータを設定してコンポーネント内で取り出すといったことができます。
slug: vuejs_router
category: vue
createDate: 2022/01/05
updated: 
cover: 'https://res.cloudinary.com/takasqr/image/upload/l_text:Sawarabi%20Gothic_100_bold:Vue Routerとは？使い方を一通り説明する,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: Vue Routerとは？使い方を一通り説明する
recommend: false
---
## はじめに



Vue Routerとは、Vue公式のルーターです。

Vue Routerと使うことで、

* ページを作成
* 作ったページにURLを設定(動的も可)
* コンポーネント内で画面遷移
* GETのパラメータを設定してコンポーネント内で取り出す

といったことができます。

::self-introduction
::

## インストール方法

主に、2通りのインストール方法があります。

### npmを使った方法
```bash
npm install vue-router
```
npmを使う場合は`Vue.use()`を使ってインストールする必要があります。

```js
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
```

### Vue CLIを使った方法

```js
vue add router
```
Vue CLIを使ってプロジェクトを始める場合はこちら。

<post-card-small slug="vuejs_create" lang="ja"></post-card-small>

## Vue Routerの基本的な考え方

Vuer RouterはURLに応じて`<router-view>`内に動的にコンテンツを表示します。

```html[App.vue]
<template>
  <v-app>
    <router-view/>
  </v-app>
</template>
```

Vue CLIを使ってインストールした場合は`App.vue`に`<router-view>`が自動的に挿入され、URLに応じて表示内容(コンポーネント)が出し分けられます。

出し分けられるコンポーネントはVueインスタンスを初期化する時に設定します。

```js[main.js]
import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue({
  router
  render: h => h(App)
}).$mount('#app')

```

```js[src/router/index.js]
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: () => import(/* webpackChunkName: "main" */ '../components/page/HomePage.vue')
    },
    {
        path: '/signin',
        name: 'SignInPage',
        component: () => import(/* webpackChunkName: "sign" */ '../components/page/SignInPage.vue')
    },
    {
        path: '/signup',
        name: 'SignUpPage',
        component: () => import(/* webpackChunkName: "sign" */ '../components/page/SignUpPage.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

```

上の例だと、

* `/`...`../components/page/HomePage.vue`
* `/signin`...`../components/page/SignInPage.vue`
* `/signup`...`../components/page/SignUpPage.vue`

のようにURLとコンポーネントが対応します。

また、Vue Routerを使うことによって、`this.$router`と`this.$route`が使えるようになります。
この2つを使うことでJavascript上でルーティング関連の操作をすることができるようになります。

## 画面遷移

`<template>`上で画面遷移させる方法はこちら。

```html
<router-link to="/signin">signin</router-link>
```

`/signin`に画面遷移します。

`<script>`上で画面遷移させる方法はこちら。

```js
this.$router.push({ path: '/home' })
```

`/home`に画面遷移します。

## 動的なルーティング
先ほと紹介したルーティングですが、URLを動的に変更したい時があると思います。

例えば`/task/0001`、`/task/0002`のような形で同じコンポーネントでURLだけ変更したい場合です。
そんな時は上の例だと`/task/:taskId`と`path`を記述します。

```js
{
    path: '/task/:taskId',
    name: 'TaskDetailPage',
    component: () => import(/* webpackChunkName: "main" */ '../components/page/TaskDetailPage.vue')
},
```

そうすることでコンポーネント内で取り出すことができます。

```js
this.$route.params['taskId']
```

画面遷移させるコードはこちら。

```js
this.$router.push({ path: `task/${this.taskId}` })
```

`this.taskId`は`data`を使って動的に変更する想定です。
