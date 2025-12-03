---
title: WordPress のセキュリティ対策５選
description: WordPress のセキュリティ対策を紹介します。
slug: wordpress_security
category: wordpress
createDate: 2024/02/23
updated: 
cover: '/thumbnail/wordpress_security.jpg'
alt: WordPress のセキュリティ対策５選
recommend: true
---

WordPress のセキュリティ対策を紹介します。

::self-introduction
::

## WordPress 本体をバージョンアップして脆弱性に対応する

WordPress そのもののバージョンを最新にすることで、WordPress のセキュリティを保つことができます。脆弱性が修正された最新バージョンを使うようにしましょう。

バージョンアップ時のトラブルに備えて、バックアップをとってから実施しましょう。

### 参考

- [WordPress のアップグレード – サポートフォーラム](https://ja.wordpress.org/support/article/updating-wordpress/)
- [Release Archive | WordPress.org 日本語](https://ja.wordpress.org/download/releases/)



## プラグインをバージョンアップして脆弱性に対応する

WordPress 本体だけでなく、プラグインにも脆弱性がある可能性があります。最新バージョンを使うようにしましょう。

バージョンアップ時のトラブルに備えて、バックアップをとってから実施しましょう。


## ログイン画面の URL を変更してに、ハッカーがたどり着けないようにする

WordPress のデフォルトのログイン URL が`wp-login.php`だということは、世界中に知れ渡っています。

ということは、ハッカーは狙ったサイトが、WordPress で作られているとわかったらまず`wp-login.php`にアクセスしてみるはずです。ログイン URL を変更して、ハッカーなどの悪意を持った人が辿り着けないようにしましょう。

### やり方

ログイン URL を変更するには、プラグインを使うのがおすすめです。私は [WPS Hide Login](https://ja.wordpress.org/plugins/wps-hide-login/) を使っています。

### 確認する

`wp-login.php`にアクセスしてみて、ログイン画面が表示されなければ成功です。

変更した URL を忘れると自分自身もログインできなくなってしまうので、注意しましょう。

### 参考

- [WPS Hide Login](https://ja.wordpress.org/plugins/wps-hide-login/)

## パスワードを長く、複雑にする

基本中の基本で、必ず行うべき対策です。IPA では最低でも10文字以上のパスワードを設定するように記載されています。

また、IPA 公開している[ページ](https://www.ipa.go.jp/security/anshin/attention/2016/mgdayori20160803.html)で、サービスごとに違うパスワードを作るテクニックが紹介されています。読んでみることをおすすめします。

### 参考

- [チョコっとプラスパスワード｜IPA 独立行政法人 情報処理推進機構](https://www.ipa.go.jp/security/chocotto/)
- [不正ログイン被害の原因となるパスワードの使い回しはNG | 情報セキュリティ | IPA 独立行政法人 情報処理推進機構](https://www.ipa.go.jp/security/anshin/attention/2016/mgdayori20160803.html)


## 脆弱性情報データベースで検索する

ある脆弱性について調べたい時に、脆弱性情報データベースを使って調べることができます。Wikipedia の[ページ](https://ja.m.wikipedia.org/wiki/脆弱性情報データベース)に、脆弱性情報データベースの成り立ちや一覧が載っているのでオススメです。

### 参考

- [脆弱性情報データベース - Wikipedia](https://ja.m.wikipedia.org/wiki/脆弱性情報データベース)


## ログの確認

アクセスログや、エラーログを確認したい時があると思います。

### 参考

- [「ログの見かた」～初心者でもよくわかる！VPSによるWebサーバー運用講座(1) | さくらのナレッジ](https://knowledge.sakura.ad.jp/3424/?noamp=mobile&amp=1)
- [WordPress でのデバッグ – サポートフォーラム](https://ja.wordpress.org/support/article/debugging-in-wordpress/)