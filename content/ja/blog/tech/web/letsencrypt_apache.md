---
title: Let's EncryptをDockerで作ったapache2(WordPress)に入れる
description: dockerで作ったWordPress(apache2)のコンテナにLet's Encryptをインストールします。Let’s Encryptは無料でホームページをHTTPS化できるツールです。Let’s EncryptはMozillaやシスコシステムズなどがスポンサーになって運営されている認証局です。
slug: letsencrypt_apache
category: web
createDate: 2019/03/03
updated: 2021/10/28
cover: 'https://res.cloudinary.com/takasqr/image/upload/l_text:Sawarabi%20Gothic_80_bold:Let%27s%20EncryptをDockerで作ったapache2(WordPress)に入れる,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: Let's EncryptをDockerで作ったapache2(WordPress)に入れる
recommend: false
---
## はじめに



Let’s Encryptを使って、WordPressを無料でSSL化する方法を記事にしました。

## Let’s Encryptって何?
Let’s Encryptは無料でホームページをHTTPS化できるツールです。Let’s EncryptはMozillaやシスコシステムズなどがスポンサーになって運営されている認証局です。2018年には累計で3億8000万通の証明書が発行され、世界中の人が利用しています。Let’s Encryptの使い方は公式サイトを参考にしました。

[https://certbot.eff.org](https://certbot.eff.org)

::self-introduction
::

## WordPressコンテナにLet’s Encryptをインストール
dockerで作ったWordPress(apache2)のコンテナにLet's Encryptをインストールします。

Dcokerで作ったWordPressにインストールすると言ってもWebサーバーのapacheに入れることには変わりません。
なので、Dockerで作ってないapacheにLet's Encryptを入れる時にも参考になると思います。

### 1. Apache用のCertBotをインストール
コンテナの中に入ってコマンドを実行します。
```bash
apt-get install python-certbot-apache -y
```

### 2. Let's Encryptをインストール
```bash
certbot --authenticator webroot --installer apache
```

コマンドを実行すると質問されるので答えていきます。

```
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Plugins selected: Authenticator webroot, Installer apache
Enter email address (used for urgent renewal and security notices) (Enter 'c' to
cancel):
```
と出るのでメールアドレスを入力します。
```
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Please read the Terms of Service at
https://letsencrypt.org/documents/LE-SA-v1.2-November-15-2017.pdf. You must
agree in order to register with the ACME server at
https://acme-v02.api.letsencrypt.org/directory
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
(A)gree/(C)ancel:
```
aを入力します。
```
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Would you be willing to share your email address with the Electronic Frontier
Foundation, a founding partner of the Let's Encrypt project and the non-profit
organization that develops Certbot? We'd like to send you email about our work
encrypting the web, EFF news, campaigns, and ways to support digital freedom.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
(Y)es/(N)o:
```
メールアドレスを共有していいかと聞かれているのでyかnで答えます。
```
No names were found in your configuration files. Please enter in your domain
name(s) (comma and/or space separated) (Enter ‘c’ to cancel):
```
ドメイン名を聞かれているので入力します。
```
Input the webroot for xxx.com: (Enter 'c' to cancel):
```
ルートディレクトリを聞かれているので、
```
/var/www/html
```
と答えます。
```
Please choose whether or not to redirect HTTP traffic to HTTPS, removing HTTP access.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
1: No redirect - Make no further changes to the webserver configuration.
2: Redirect - Make all requests redirect to secure HTTPS access. Choose this for
new sites, or if you're confident your site works on HTTPS. You can undo this
change by editing your web server's configuration.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Select the appropriate number [1-2] then [enter] (press 'c' to cancel):
```
HTTPへのアクセスをHTTPSへリダイレクトするかと聞かれているので特別な理由がなければリダイレクトする2を入力します。
```
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Congratulations! You have successfully enabled https://xxx.com

You should test your configuration at:
https://www.ssllabs.com/ssltest/analyze.html?d=xxx.com
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
```
と表示されれば成功です。

* http(80)のポートを開けないと認証に失敗してしまうので注意。
* サーバーのネットワーク設定でhttps(443)のポートを開けるのを忘れないようにする。

## 証明書を更新する(自動更新も)
### 証明書を更新する
Let’s Encryptは無料で大変便利ですが、3ヶ月ごとに更新が必要になります。
```
certbot renew --post-hook "service apache2 reload"
```

–post-hookの”service apache2 reload”は更新した後に実行するコマンドを指定できます。

ちなみにまだ更新期限が近くないのに実行すると
```
Cert not yet due for renewal
```
と表示されます。

### 自動更新
Linuxのcronというコマンドを使って自動で実行します。

まず、
```
/etc/rc.d/init.d/crond status
```
でcronが実行中か確認する。実行中だと、
```
crond (pid  XXXX) を実行中...
```
と表示されます。
```
sudo vi /etc/cron.d/[file]
```
に
```
00 00 * * 0 [user] sudo docker exec -it [container] certbot renew --post-hook "service apache2 reload"
```
と書きます。

これで毎週日曜の0時にコマンドが実行されます。

ログは/var/log/cronの中にあります。

## おまけ1 Let’s Encryptの登録をコマンド一行で終わらせる
通常、Let’s Encryptを設定するときは対話式で設定が進んでいきます。対話式は自動化との相性が悪いです。なので必要な項目をあらかじめオプションで指定しておくことで対話が起こらないようにして、シェルスクリプト等での使い勝手を向上させます。

そうすることでDockerfileにも記述できるようになります。

### 作ったコマンド
オプション一覧をもとにコマンドを作ります。
```bash
certbot -d [domain] --apache --agree-tos -m [mailaddress] -n --redirect -w /var/www/html
```

## おまけ2 SSLの設定をテストする

[https://www.ssllabs.com/ssltest/](https://www.ssllabs.com/ssltest/)

SSLの設定の強度をテストしてくれるサイトです。

このサイトで試して見たところ、A評価でした。

## おまけ3 ヘルプ
よくある使い方。
```bash
certbot -h
```

全ての使い方。
```bash
certbot -h all
```
