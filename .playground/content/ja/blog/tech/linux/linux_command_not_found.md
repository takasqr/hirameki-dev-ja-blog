---
title: Linuxでcommand not foundと出た時に見るページ
description: Linuxでcommand not foundと出た時の原因特定方法を紹介します。command not found とは、「指定されたコマンドが見つからない。」という意味です。Dockerを例に紹介します。
slug: linux_command_not_found
category: linux
createDate: 2019/06/21
updated: 2021/10/28
cover: 'https://res.cloudinary.com/takasqr/image/upload/l_text:Sawarabi%20Gothic_80_bold:Linuxでcommand not foundと出た時に見るページ,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: Linuxでcommand not foundと出た時に見るページ
recommend: false
---
## はじめに



Linuxでcommand not foundと出た時の原因特定方法を紹介します。

```
command not found
```

とは、「指定されたコマンドが見つからない。」という意味です。

Dockerを例に紹介します。

コマンドが見つからない理由がパスが通ってないからなのか確認する方法を紹介します。

::self-introduction
::

## パスが通っているか確認する
パスが通っているか確認する方法を2つ紹介します。
コマンドがインストールされている場所がわかっている場合は`調査方法2`、わからない場合は`調査方法1`を行います。

パスが通ってなかった場合は、コマンドを再インストールしたりして、PATHが通るように修正します。

### 調査方法1. コマンドの実行ファイルの有無を確認する

```bash
which -a docker
```

で実行ファイルの場所を確認することができます。

ちなみにwhichコマンドは実行ファイルのフルパスを表示するコマンドです。
Macでも使えます。

```
MBP:litely t$ which npm
/usr/local/bin/npm
```

### 調査方法2. 実行ファイルの場所にPATHが通ってるか確認する
PATHとはプログラムをファイル名だけで実行するための仕組みです。

ファイル名だけで実行したいプログラムを特定のフォルダに集めて、「PATH」という環境変数に登録しておきます。

そうしておくと、コマンドを実行しようとしたときにPATHに登録してあるディレクトリの中ファイル名とコマンド名が一致するものを探してプログラムを実行してくれます。

PATHに登録されているディレクトリを確認するには、環境変数のPATHを呼び出します。
```bash
echo $PATH
```
PATHが通っているか確認するには、プログラムの実行ファイルの場所がPATHに含まれているか確認します。

もしなかった場合は実行ファイルの場所にPATHが通ってなかったために実行できなかった可能性があります。

## おまけ 本当にPATHのせいなのか確認する
`手順1`で調べたコマンドのPATHを省略しないで実行してみるとPATHが通ってないから実行できないのか、より正確に把握できます。

例えば、Dockerであれば、
```bash
docker ps -a
```
を、
```
/usr/bin/docker ps -a
```
に変更して実行してみます。パスを全て指定して実行することで、パスが通ってなくてもコマンドが実行できるので問題の特定に役立ちます。
