---
title: DockerfileのCOPYでファイルやディレクトリごとコンテナにコピーする
description: ホスト側からコンテナにファイルやディレクトリをそのままコピーして転送する方法を紹介します。Dockerfileには親のOSからコンテナにファイルを送るコマンドが2種類あります。それがADDとCOPYというコマンドです。
slug: docker_dockerfile_copy
category: docker
createDate: 2021/03/11
updated: 2021/08/22
cover: 'https://res.cloudinary.com/takasqr/image/upload/l_text:Sawarabi%20Gothic_60_bold:DockerfileのCOPYでファイルやディレクトリごとコンテナにコピーする,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: DockerfileのCOPYでファイルやディレクトリごとコンテナにコピーする
recommend: false
---

## Dockerfileでファイルやディレクトリごとコンテナにコピーしたい



今回は、ホスト側からコンテナにファイルやディレクトリをそのままコピーして転送する方法を紹介します。



### ADDとCOPYという2つのコマンド
Dockerfileには親のOSからコンテナにファイルを送るコマンドが2種類あります。
それがADDとCOPYというコマンドです。

COPYはファイルをコンテナの中にコピーするだけですが、ADDはtarファイルの展開機能もあります。__なのでファイルをコピーするだけならCOPYを使用した方が、コードの意味が推測しやすくなるので推奨されているようです。__

今回はCOPYの使用方法を紹介します。

### 開発環境
```
Docker version 18.06.1-ce
```



## 1つのファイルをコピーする
ます、Dockerfileがあるディレクトリの中にコピーしたいファイルを配置します。

その上でDockerfileに記述します。

```
COPY test.sh /home/test-user/
```

このような形で送りたいファイルの後に送りたいコンテナの中のパスをします。
例では、`test.sh`というファイルをコンテナの`/home/test-user/`というディレクトリの中に配置するコードです。


## ディレクトリごとコピーする
ディレクトリの中を全部コンテナの中にコピーしたい場合は、

```
COPY test/ /home/test-user/test/
```

のようにファイルではなく、フォルダを指定するとできます。
例では、`test`というディレクトリをコンテナの`/home/test-user/`というディレクトリの中に配置するコードです。

## さいごに
コンテナにコピーしたいファイルが複数ある場合は、ファイルではなくディレクトリごと指定する方が効率的にDockerfileを記述することができます。

[Dockerfile リファレンス | Docker ドキュメント日本語化プロジェクト](http://docs.docker.jp/engine/reference/builder.html)
