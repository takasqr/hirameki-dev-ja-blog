---
title: dockerfileのenvを使って環境変数を渡す【ARGとの違いも説明する】
description: dockerfileで環境変数をコンテナに渡すには、envを使います。run を使うときdockerfileの値から変える方法や、envを使ってコンテナのPATH環境変数を設定する方法も紹介します。さいごにargとのenvの違いも紹介します。
slug: docker_dockerfile_env
category: docker
createDate: 2021/10/24
updated: 2022/07/27
cover: 'https://res.cloudinary.com/takasqr/image/upload/l_text:Sawarabi%20Gothic_80_bold:dockerfileのenvを使って環境変数を渡す【ARGとの違いも説明する】,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: dockerfileのenvを使って環境変数を渡す【ARGとの違いも説明する】
recommend: false
---
## dockerfileのenvは環境変数を設定する



`dockerfile`で環境変数をコンテナに渡すには、`env`を使います。

使い方を紹介します。



::self-introduction
::


## envの使い方
### 1. dockerfileを作る
`dockerfile`の書き方です。
```dockerfile
FROM centos

ENV SITE_DOMAIN "example.com"
```

これで、出来上がったイメージの内で環境変数`SITE_DOMAIN`の中に`example.com`が入ります。

### 2. dockerfileをビルドする
`dockerfile`をビルドするコマンド。

```bash
docker build -t centos-custom:0.1 .
```
これで出来上がったイメージの中に環境変数が埋め込まれました。

### `-e`を使って`run`の時初期値から変える
`dockerfile`で設定した値から変えたい時は、`-e`で渡すことができる。

```bash
docker container run \
  -d \
  -e SITE_DOMAIN="example.net" centos-custom:0.1
```

上の例だと`dockerfile`では`example.com`だった`SITE_DOMAIN`が`example.net`に変わっている。

## dockerfileのenvでpath環境変数を設定する

dockerfileの`env`ではPATH環境変数を設定することもができます。

> 新しいソフトウェアを簡単に実行するため、コンテナにインストールされているソフトウェアの PATH 環境変数を ENV を使って更新できます。

[ENV | Dockerfile のベストプラクティス | Docker-docs-ja](https://docs.docker.jp/engine/articles/dockerfile_best-practice.html#env)

例えば下のコードで`nginx`にPATHを通すことができます。

```
ENV PATH /usr/local/nginx/bin:$PATH
```



## dockerfileのenvをファイルで設定できる?
出来ないようです。

`docker compose`であれば`.env`ファイルや`--env-file`を使うことで、環境変数の値を別ファイルにまとめることができます。
ですが、dockerfileでは出来ないみたいです。


## ARGとの違い
* ENVはdockerfileから生成されたコンテナ内に環境変数を埋め込むことができます
* ARGはdockerfile内で使える変数を設定することができます

似ているようで全然違いますね。

## さいごに

他にも`dockerfile`関連の記事を書いてます。

<post-card-small slug="docker_dockerfile_copy" lang="ja"></post-card-small>

