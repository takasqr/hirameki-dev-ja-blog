---
title: データベースで使うCRUDとは?読み方から説明する
description: CRUDはクラッドと読みます。コンピュータがデータを保存しておくための4つの基本機能の頭文字を並べたものをCRUD(クラッド)と言います。4つの基本機能はそれぞれ、Create(生成)、Read(読み取り)、Update(更新)、Delete(削除)の頭文字をとったものです。
slug: database_crud
category: database
createDate: 2021/05/10
updated: 
cover: 'https://res.cloudinary.com/t8/image/upload/l_text:Sawarabi%20Gothic_80_bold:データベースで使うCRUDとは読み方から説明する,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: データベースで使うCRUDとは?読み方から説明する
recommend: false
---
## CRUDとは?



CRUDは __クラッド__ と読みます。

コンピュータが __データを保存しておくための4つの基本機能__ の頭文字を並べたものをCRUD(クラッド)と言います。

4つの基本機能はそれぞれ、

* Create(生成)
* Read(読み取り)
* Update(更新)
* Delete(削除)

の頭文字をとったものです。

::self-introduction
::

## 詳しく説明
TODOアプリを例に説明します。

* Createはタスクを新たに追加すること
* Readは既に登録されているタスクを呼び出すこと
* Updateは既に登録されているタスクを更新すること
* Deleteは既に登録されているタスクを削除すること

と言う感じでタスクに対する操作を表すことができます。

これら4つの機能がアプリに揃ってるかを確認することで機能に漏れがないかを確認することができます。

## SQLとCRUD
データベースを操作するプログラミング言語であるSQLとCRUDはマッチします。


* Create(生成) → INSERT
* Read(読み取り) → SELECT
* Update(更新) → UPDATE
* Delete(削除) → DELETE

このようにSQLの基本クエリとそれぞれマッチします。

## UPSERT
少し話がそれますが、SQLの概念でUPSERTというものもあったりします。

UPSERTはINSERTとUPDATEをあわせたもので、 __INSERTできればINSERTを実行し、データがすでにあってできなければUPDATEを実行する。__ というものです。

```
INSERT + UPSERT = UPSERT
```

## CRUD図
処理(機能)とCRUDのマトリクス図のことをCRUD図といいます。

CRUD図を作ることで「商品マスタの新規追加機能を作り忘れた！」なんてことを防ぐことができます。

## さいごに
CRUDはシステム設計の基本なので理解しておきたいですね。
