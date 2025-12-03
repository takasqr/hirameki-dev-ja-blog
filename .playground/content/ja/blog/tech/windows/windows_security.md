---
title: Windows のセキュリティ対策
description: Windows でのセキュリティ対策を紹介します。
slug: windows_security
category: windows
createDate: 2024/02/25
updated: 
cover: '/thumbnail/windows_security.jpg'
alt: Windows のセキュリティ対策
recommend: true
---
Windows でのセキュリティ対策を紹介します。

::self-introduction
::

## Autoruns で PC がマルウェアに感染してないか確認する

Windows Sysinternals の Autoruns を利用することで、自分の Windows PC がマルウェアに感染してないか確認することができます。

Autoruns とは、Windows の起動時に実行されるアプリケーションやスクリプトをリストアップすることができるツールです。
マルウェアは、スタートアップスクリプトを設置してマウウェア自身を起動しようとします。

そこで、起動時に実行されるアプリケーションやスクリプトを検査することで、怪しいものがないか確認できます。

Autoruns はスキャン結果をエクスポートすることができます。PC のセットアップ時にエクスポートしておくと、現在の状態と差分を確認することができるので便利です。

また、PC が怪しい状態になって調査したいときに、セットアップ時のエクスポートがないことがあると思います。その場合は同じ構成の感染してない PC との差分を確認することである程度代用することができます。完全な結果にならないことに留意しなければなりませんが、職場などで同じモデルで同じアプリケーションをインストールしている場合に有効です。

## 参考
- [Autoruns for Windows v14.11 | Microsoft Learn](https://learn.microsoft.com/ja-jp/sysinternals/downloads/autoruns)