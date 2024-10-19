---
title: Vue で MVVM + ドメイン駆動開発
description: Vue で MVVM + ドメイン駆動開発 を実践した時の記録です。
slug: vuejs_ddd_mvvm
category: vuejs
createDate: 2024/02/28
updated: 
cover: '/thumbnail/vuejs_ddd_mvvm.jpg'
alt: Vue で MVVM + ドメイン駆動開発
recommend: true
homepage: true
---

Vue で MVVM + ドメイン駆動開発 を実践した時の記録です。

⚠️この記事は、MVVM とドメイン駆動開発のエッセンスを取り入れたオレオレアーキテクチャを紹介する記事です。正式で正しい MVVM やドメイン駆動開発を紹介するものではありません。⚠️

## なぜ？

新しく、Vue のプロジェクトを始めるに当たって、整理されたプロジェクトを作りたかったから。

::self-introduction
::

## アーキテクチャの概要

まず、MVVM でレイヤーを分けて、その後モデルの部分にドメイン駆動開発の依存関係の整理方法を当てはめました。

調べる中でドメイン駆動開発を完全に当てはめるのは、自分が作りたいアプリケーションの規模では重厚すぎると感じました。なので、依存関係の整理で取り入れつつも、当てはめすぎないように気をつけながら作りました。

技術構成は以下の通りです。

- Vue3
- TypeScript

## Vue と MVVM

MVVM とは Model、ViewModel、View の３層に分けて開発するアーキテクチャです。

Vue の旧サイトを見ると、Vue は MVVM の ViewModel として開発されたとあります。

> Vue.js is focused on the ViewModel layer of the MVVM pattern. It connects the View and the Model via two way data bindings.
> Vue.jsは、MVVMパターンのViewModelレイヤーに焦点を当てている。Vue.jsは、双方向のデータ・バインディングによってViewとModelを接続します。

なので、Vue で ViewModel のコードを書き、TypeScript で Model のコードを書くことにしました。

![vuejs_mvvm](/img/vuejs_ddd_mvvm/vuejs_mvvm.jpg)

## ドメイン駆動開発

ドメイン駆動開発の部分は本を参考に作りました。

![dependencies](/img/vuejs_ddd_mvvm/dependencies.drawio.png)


## コード

書いたコードは GitHub においてあります。

[FoodAdditiveScanner-WebApp | GitHub](https://github.com/takasqr/FoodAdditiveScanner-WebApp)