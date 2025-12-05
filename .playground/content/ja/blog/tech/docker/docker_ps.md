---
title: DockerのpsでCOMMANDを省略しないで表示する
description: Dockerのコンテナ一覧を表示する。「docker ps -a」さらにCOMMANDを省略しないで表示するには、「sudo docker ps -a --no-trunc」と入力します。
slug: docker_ps
category: docker
createDate: 2019/06/19
updated: 
cover: 'https://res.cloudinary.com/takasqr/image/upload/l_text:Sawarabi%20Gothic_80_bold:DockerのpsでCOMMANDを省略しないで表示する,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: DockerのpsでCOMMANDを省略しないで表示する
recommend: false
---





## Dockerのコンテナ一覧
Dockerのコンテナ一覧を表示する。

```bash
docker ps -a
```

さらにCOMMANDを省略しないで表示するには、

```bash
sudo docker ps -a --no-trunc
```

と入力します。