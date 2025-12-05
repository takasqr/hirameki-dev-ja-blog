---
title: NUXTの開発環境をVSCodeとDockerで作る
description: Nuxtの開発環境をVSCodeのVisual Studio Code Remoteを使って作ったので紹介します。Firebaseも一緒にインストールします。この方法で開発環境を構築すると、Dockerを使うのでWindows、Mac、LinuxどのOSでも同じ環境を作ることができます。
slug: nuxtjs_development
category: nuxtjs
createDate: 2021/09/15
updated: 2021/10/02
cover: 'https://res.cloudinary.com/takasqr/image/upload/l_text:Sawarabi%20Gothic_80_bold:NUXTの開発環境をVSCodeとDockerで作る,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: NUXTの開発環境をVSCodeとDockerで作る
recommend: false
---
## はじめに



Nuxtの開発環境をVSCodeの`Visual Studio Code Remote`を使って作ったので紹介します。
Firebaseも一緒にインストールします。

この方法で開発環境を構築すると、

* Dockerを使うのでWindows、Mac、LinuxどのOSでも同じ環境を作ることができる
* dockerfile、docker-compose.ymlに構築手順を書いておけるので手順を覚えておく必要がない
* OSにライブラリをインストールする必要がなくなる

といったメリットがあります。

逆にデメリットは、

* Docker Desktopが快適に動くPCのスペックが必要

といった所でしょうか。

今回はNuxtの開発環境として書いてますが、この方法はdockerfile、docker-compose.ymlで表現できる環境ならどんな言語、構成でも使うことができます。



## インストール

下の3つのソフトとプラグインをインストールします。

* [Visual Studio Code](https://code.visualstudio.com/)
* [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
* [Docker Desktop](https://www.docker.com/products/docker-desktop)

### Visual Studio Code
[Visual Studio Code](https://code.visualstudio.com/)はソースコードを編集するためのエディタです。

### Remote - Containers
[Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)はVisual Studio Codeのプラグインです。

### Docker Desktop
[Docker Desktop](https://www.docker.com/products/docker-desktop)はDockerをデスクトップ環境で使うためのソフトです。Windowsでこの開発環境を作るためにはWSL2を有効化しておく必要があります。

## Docker Composeを準備
プロジェクト直下に`.devcontainer`ディレクトリを用意してDocker Compose関連のファイルを用意します。

```json[devcontainer.json]
{
  "name": "Litely",
  "dockerComposeFile": [
    "docker-compose.yml"
    ],
  "service": "nuxt",
  "workspaceFolder": "/home/app/",
  "settings": {},
  "extensions": [
    "octref.vetur",
    "dbaeumer.vscode-eslint"
    ]
}
```


```yml[docker-compose.yml]
version: '3'

services:
  nuxt:
    build: .
    ports:
      - 3000:3000
      - 5000:5000
      - 5001:5001
      - 8080:8080
      - 8085:8085
      - 9005:9005
    tty: true
    stdin_open: true
    volumes:
      - ../:/home/app
```


```dockerfile[Dockerfile]
FROM node

RUN echo 'linux update'; \
  apt update && \
  apt upgrade -y

RUN echo 'vue-cli install'; \
  npm install -g @vue/cli

RUN echo 'firebase-tools install'; \
  npm install -g firebase-tools

```
## 起動
起動すると自働的に`Dockerfile`がビルドされて`devcontainer.json`の`workspaceFolder`で指定したパスでVSCodeのターミナルが起動します。

その後は`npm run dev`とかを使いながら開発していきます。

## 参考
[Developing inside a Container | Visual Studio Code](https://code.visualstudio.com/docs/remote/containers)
