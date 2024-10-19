---
title: Dockerのcpでホストとコンテナ間でのファイルコピー
description: コンテナにファイルを送る方法を紹介します。[file_name]は拡張子まで書く。[path]はファイル名までいれない。/tmpのような形コンテナからファイルを送る第1引数と第2引数を逆にする。フォルダごと送る方法も紹介します。
slug: docker_cp
category: docker
createDate: 2019/06/19
updated: 
cover: 'https://res.cloudinary.com/t8/image/upload/l_text:Sawarabi%20Gothic_80_bold:Dockerのcpでホストとコンテナ間でのファイルコピー,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: Dockerのcpでホストとコンテナ間でのファイルコピー
recommend: false
---
## コンテナにファイルを送る
コンテナにファイルを送る方法を紹介します。



```bash
docker cp [file_name] [container_id]:[path]
```

* [file_name]は拡張子まで書く
* [path]はファイル名までいれない。/tmpのような形

::self-introduction
::

## コンテナからファイルを送る
第1引数と第2引数を逆にする


## フォルダごと送る
* フォルダごと転送するのもcpコマンド
* ディレクトリ名の後に`/.`を付ける

```bash
docker cp [dir_name]/. [container_id]:[dir_name]
```