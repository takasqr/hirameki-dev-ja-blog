---
title: Linux のセキュリティ対策
description: Linux のセキュリティ対策を紹介します。
slug: linux_security
category: dev
createDate: 2024/03/05
updated: 
cover: '/thumbnail/linux_security.jpg'
alt: Linux のセキュリティ対策
recommend: true
---

::self-introduction
::

## パーミッションを適切に設定する

パーミッションとは、ファイルやディレクトリにアクセスや編集できるかどうかの権限を設定できる機能です。

このパーミッションを適切に設定することでセキュリティを向上させることができます。具体的には「管理者ユーザー以外にはシステムファイルへのアクセスを許可しない」など、必要以上に権限を広げないことが大切です。

## SSH のポートを変更する

SSH で使うポートは wellknown ポートです。世界中の共通認識で、22 が SSH のポートとなっています。なのでハッカーはランダムな ID とパスワードで 22 のポートに対してアクセスを試みようとしてきます。

そこで SSH のポートを変更してしまえばランダムな ID とパスワードで試すことすらできなくなるので、セキュリティが向上します。