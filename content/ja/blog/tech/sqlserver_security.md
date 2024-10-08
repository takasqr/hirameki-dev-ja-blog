---
title: SQL Server のセキュリティ対策
description: SQL Server でのセキュリティ対策を紹介します。
slug: sqlserver_security
category: sqlserver
createDate: 2024/02/25
updated: 
cover: '/thumbnail/sqlserver_security.jpg'
alt: SQL Server のセキュリティ対策
recommend: true
---
SQL Server でのセキュリティ対策を紹介します。

::self-introduction
::

## データを暗号化して保存する

機密情報を SQLServer に保存する必要がある場合は、レコードの内容を暗号化して保存することができます。

[透過的なデータ暗号化 (TDE) | Microsoft Learn](https://learn.microsoft.com/ja-jp/sql/relational-databases/security/encryption/transparent-data-encryption?view=sql-server-ver16)

## SQL インジェクション

SQL インジェクションとは Wikipedia によると、

> SQLインジェクション（英: SQL injection）とは、アプリケーションのセキュリティ上の不備を意図的に利用し、アプリケーションが想定しないSQL文を実行させることにより、データベースシステムを不正に操作する攻撃方法のこと。また、その攻撃を可能とする脆弱性のことである。

具体的な手法については [Wikipedia のページ](https://ja.wikipedia.org/wiki/SQLインジェクション)に記載されています。

パラメーター化された方法で、動的に生成される SQL ステートメントを作成し、以下の通り入力値を検証する必要があります。

- `;`クエリの区切り記号を禁止する
- `'`文字データ文字列の区切り記号を禁止する
- `--`単一行コメントの区切り記号を禁止する
- `/ * ... * /`コメントの区切り記号を禁止する
- `xp_cmdshell`などの xp_ カタログ拡張ストアド プロシージャを禁止する

### 参考

- [SQL インジェクションのリスク | SQL Server のセキュリティのベスト プラクティス - SQL Server | Microsoft Learn](https://learn.microsoft.com/ja-jp/sql/relational-databases/security/sql-server-security-best-practices?view=sql-server-ver16#sql-injection-risks)
- [SQLインジェクション | Wikipedia](https://ja.wikipedia.org/wiki/SQLインジェクション)
- [安全なウェブサイトの作り方 - 1.1 SQLインジェクション | 独立行政法人情報処理推進機構（IPA）](https://www.ipa.go.jp/security/vuln/websecurity/sql.html)