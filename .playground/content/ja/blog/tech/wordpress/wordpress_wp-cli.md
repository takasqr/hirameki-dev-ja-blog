---
title: wp-cliのインストールと使い方【WordPressコマンドツール】
description: WordPressに対する変更をLinuxのコマンドラインで行うことができるツールです。WordPressのインストールから記事の投稿まで様々なことがコマンド上でできます。
slug: wordpress_wp_cli
category: wordpress
createDate: 2019/06/09
updated: 2021/08/29
cover: 'https://res.cloudinary.com/takasqr/image/upload/l_text:Sawarabi%20Gothic_80_bold:wp-cliのインストールと使い方【WordPressコマンドツール】,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: wp-cliのインストールと使い方【WordPressコマンドツール】
---
## WP-CLIとは



WordPressに対する変更をLinuxのコマンドラインで行うことができるツールです。WordPressのインストールから記事の投稿まで様々なことがコマンド上でできます。

::self-introduction
::

## WP-CLIをインストールする
pharファイルをダウンロードします。
```bash
curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
```

wp-cli.pharファイルが動くことを確認する。

```bash
php wp-cli.phar --info
```

wp-cli.pharに実行権限をつける。
```bash
chmod +x wp-cli.phar
```

wp-cli.pharをwpに名前変更してPATHの通る場所に配置する。
mvコマンドを使って名前変更と、配置を一度に行います。
```bash
sudo mv wp-cli.phar /usr/local/bin/wp
```

動作確認します。

/usr/local/bin以外の場所から、
```bash
wp --info
```
と打って情報が返ってくれば成功です。
```
OS:Linux 4.14.121-85.96.amzn1.x86_64 #1 SMP Wed May 22 00:45:50 UTC 2019 x86_64
Shell:
PHP binary:/usr/local/bin/php
PHP version:7.3.6
php.ini used:
WP-CLI root dir:phar://wp-cli.phar/vendor/wp-cli/wp-cli
WP-CLI vendor dir:phar://wp-cli.phar/vendor
WP_CLI phar path:/var/www/html
WP-CLI packages dir:
WP-CLI global config:
WP-CLI project config:
WP-CLI version:2.2.0
```

はじめ、wp-cli.pharファイルをwpに名前変更することに気づかなくて、 /usr/local/binにwpフォルダを作ってしまってました。

### Dockerfileに書くとしたら
DockerfileのRUNコマンドに書きました。動作確認済です。
```bash
RUN echo 'wp-cli'; \
  curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar; \
  chmod +x wp-cli.phar; \
  mv wp-cli.phar /usr/local/bin/wp
```

## 記事を投稿する
`post`コマンドで記事をコマンドで投稿する。
CUI環境でWordPressの記事を投稿できるコマンドです。

### 基本
下のコマンドを実行する。
```bash
wp post create \
  --allow-root \
  --post_content="<h2>test</h2>" \
  --post_title="test" \
  --post_status="Publish" \
  --post_type="Post" \
  --post_date="2019-6-16 00:00:00" \
  --post_modified="2019-6-16 00:00:00"
```

パラメータは適宜読み替えてください。

### テキストファイルの中身をcontentとして投稿する
```bash
wp post create \
  --allow-root \
  --post_content="`cat /home/[user_name]/post/example.html`" \
  --post_title="test" \
  --post_status="Publish" \
  --post_type="Post" \
  --post_date="2019-6-16 00:00:00" \
  --post_modified="2019-6-16 00:00:00"
```

```
/home/[user_name]/post/example.html
```
example.htmlの内容を記事のcontentとして出力します。

### ディレクトリの中にあるテキストファイルを記事として出力する
```bash
#!/bin/bash

cd /home/wordpress-auto/post
for file in `\find . -maxdepth 1 -type f`; do
  wp post create \
    --allow-root \
    --path="/var/www/html/" \
    --post_content="`cat $file`" \
    --post_title="test" \
    --post_status="Publish" \
    --post_type="Post" \
    --post_date="2019-6-16 00:00:00" \
    --post_modified="2019-6-16 00:00:00"
done
```
ディレクトリの中にあるファイルをループさせて、記事を投稿していきます。

### テキストの中のパラメータを利用して投稿する
```bash
#!/bin/bash

cd /home/wordpress-auto/post
for file in `\find . -maxdepth 1 -type f`; do
  wp post create \
    --allow-root \
    --path="/var/www/html/" \
    --post_content="`cat $file`" \
    --post_date="`sed -n 1p $file`" \
    --post_modified="`sed -n 2p $file`" \
    --post_status="`sed -n 3p $file`" \
    --post_title="`sed -n 4p $file`" \
    --post_type="`sed -n 5p $file`"
done
```
バッククォートの中はコマンドとして評価されるので、
```bash
sed -n 5p $file
```
sedを使って任意の行を抜き出しています。

### 躓いたこと
はじめ、Markdownをcontentに入れて実行しましたが、変換してくれずhtmlで流してみるとうまくいきました。

## その他コマンドを紹介する
### Just another WordPress siteを変更する
WordPressをインストールするとブログタイトルの横に出てくるアレです。

以下コマンドで変更できます。

```bash
wp option update blogdescription 'dev application !!' --allow-root --path="/var/www/html/"
```

`blogdescription`という項目名のようです。

「dev application !!」の部分を好きなフレーズに変更してください。

### Menuを登録する
WP-CLIでメニューをコマンドで登録しました。

```bash
# primary-menuを登録
wp menu create "primary-menu" --allow-root --path="/var/www/html/"
```

```bash
# Menu の中身を登録
wp menu item add-post "primary-menu" 00012 --title="post list" --allow-root --path="/var/www/html/"

wp menu item add-post "primary-menu" 00014 --title="links" --allow-root --path="/var/www/html/"
```

```bash
# location を登録
wp menu location list --allow-root --path="/var/www/html/"
```

```bash
# location を登録
wp menu location assign primary-menu menu-1 --allow-root --path="/var/www/html/"
# wp menu location assign primary-menu primary --allow-root --path="/var/www/html/"
```

はじめロケーションの登録がうまくいきませんでした。
```
Error: Invalid location primary.
```

原因を調べるためにlocationのリストを表示させると、

```
location        description
menu-1  Primary
footer  Footer Menu
social  Social Links Menu
```

Primaryに登録する為には`menu-1`という名前で登録する必要があるようです。

WP-CLIの公式サイトには、
```
$ wp menu location assign primary-menu primary
Success: Assigned location primary to menu primary-menu.
```
とかいてありましたが違うようです。

## さいごに
記事の内容をテキストファイルにすることができると、gitなどで記事を管理することができるようになります。

## 参考
WP-CLIのコマンドリファレンスサイト。

[https://developer.wordpress.org/cli/commands/](https://developer.wordpress.org/cli/commands/)
