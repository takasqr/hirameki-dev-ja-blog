---
title: Git のセキュリティ対策４選
description: Git のセキュリティ対策を紹介します。
slug: git_security
category: dev
createDate: 2024/02/29
updated: 
cover: '/thumbnail/git_security.jpg'
alt: Git のセキュリティ対策４選
recommend: true
---

Git のセキュリティ対策を４つ紹介します。



##  Git の最新バージョンを使う

Git でも他のソフトウェアと同じく、脆弱性が見つかることがあります。最新バージョンの Git を使うようにしましょう。

[バージョン管理システム「Git」にセキュリティ上の脆弱性、Git for Windowsユーザーやマルチユーザー環境利用者が取るべき対処法は？ | Gigazine](https://gigazine.net/news/20220414-git-security-vulnerability/)

## Git に機密情報を含めない

Git には ID やパスワードなどの機密情報を含めないで管理しましょう。

環境変数や`.gitignore`を利用することで機密情報をコミットすることなく管理することができます。

`.gitignore`の使い方はこのブログでも紹介しています。

[【2022年版】.gitignoreの書き方を6パターン紹介](/ja/blog/tech/git/git_gitignore)

## pre-commti

> pre-commit フックは、コミットメッセージが入力される前に実行されます。 これは、いまからコミットされるスナップショットを検査したり、何かし忘れた事がないか確認したり、テストが実行できるか確認したり、何かしらコードを検査する目的で使用されます。

Git の公式サイトにも書いてある通り、pre-commit を使えば、追加しようとしてるコードにセキュリティの問題がないかチェックすることができます。

[8.3 Git のカスタマイズ - Git フック | git](https://git-scm.com/book/ja/v2/Git-のカスタマイズ-Git-フック)

## コミットに署名する

Git ではコミットやタグに署名することができます。そうすることで、誰が書いたコードなのか、改竄されてないかを確認することができます。GPG（GNU Privacy Guard）を使用して、デジタル署名を生成し、それをコミットに添付します。

[7.4 Git のさまざまなツール - 作業内容への署名 | git](https://git-scm.com/book/ja/v2/Git-のさまざまなツール-作業内容への署名)
