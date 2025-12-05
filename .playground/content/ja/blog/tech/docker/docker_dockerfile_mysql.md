---
title: WordPress用のmysql(5.7)をdockerfileで作る
description: mysqlのdockerfileを作ります。mysqlのバージョンを`5.7`で指定します。`5.7`以降のバージョンで作った時はエラーが出ました。dockerhubのwordpressページでもmysqlは5.7で作るようにサンプルコードがありました。
slug: docker_dockerfile_mysql
category: docker
createDate: 2021/10/26
updated: 
cover: 'https://res.cloudinary.com/takasqr/image/upload/l_text:Sawarabi%20Gothic_100_bold:WordPress用のmysql(5.7)をdockerfileで作る,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: WordPress用のmysql(5.7)をdockerfileで作る
recommend: false
---
## 1. dockerfileを作る



mysqlのdockerfileを作ります。mysqlのバージョンを`5.7`で指定します。
```dockerfile
FROM mysql:5.7
```

`5.7`以降のバージョンで作った時はエラーが出ました。
dockerhubのwordpressページでもmysqlは5.7で作るようにサンプルコードがありました。

[wordpress | dockerhub](https://hub.docker.com/_/wordpress)




## 2. dockerfileをビルドする
dockerfileビルドする。
```bash
docker build -t mysql-custom-image:0.1 .
```

* `0.1`パージョン番号
* `mysql-custom-image`イメージ名

## 3. 作ったイメージのコンテナを作る
mysqlのコンテナをビルドします。
環境変数の部分は読み替えて下さい。

```bash
docker container run \
  --name mysql-custom-container \
  -e MYSQL_ROOT_PASSWORD=XXXXXXXX \
  -d \
  -m 448m \
  --oom-kill-disable=true \
  --restart=always mysql-custom-image:0.1
```

* `-e MYSQL_ROOT_PASSWORD`mysqlのパスワード
* `mysql-custom-image`先ほどビルドしたイメージを指定

## 4. 作ったコンテナに接続する

```bash
docker exec -it mysql-custom-container bash
```

## おまけ(日本語対応)
mysqlの文字コードを変える`dockerfile`です。
my.cnfに`echo`で追記してます。

ただ、このやり方が正しいのかはわかりません。。。
`COPY`でファイルを送り込んだり、ボリュームをマウントする方法の方がスマートな気がする。。。

```dockerfile
FROM mysql:5.7

RUN echo '' >> /etc/mysql/my.cnf
RUN echo '[mysqld]' >> /etc/mysql/my.cnf
RUN echo 'character-set-server=utf8' >> /etc/mysql/my.cnf
RUN echo '' >> /etc/mysql/my.cnf
RUN echo '[client]' >> /etc/mysql/my.cnf
RUN echo 'default-character-set=utf8' >> /etc/mysql/my.cnf
```