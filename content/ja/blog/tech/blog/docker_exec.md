---
title: Docker execでコンテナ外からコマンドを実行する
description: コンテナの外からコンテナに対してコマンドを実行したいときに調べました。「docker exec [container-name] [command]」上の例だとwordpressというコンテナに「wp menu location list --allow-root --path="/var/www/html/"」というコマンドを実行しています。
slug: docker_exec
category: docker
createDate: 2019/10/12
updated: 2021/08/22
cover: 'https://res.cloudinary.com/t8/image/upload/l_text:Sawarabi%20Gothic_80_bold:Docker execでコンテナ外からコマンドを実行する,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: Docker execでコンテナ外からコマンドを実行する
recommend: false
---

::self-introduction
::

## コンテナ外からコマンドを実行したい



コンテナの外からコンテナに対してコマンドを実行したいときに調べました。

```bash
docker exec [container-name] [command]
```

実際にはこんな感じ。

```bash
docker exec wordpress wp menu location list --allow-root --path="/var/www/html/"
```
上の例だと`wordpress`というコンテナに`wp menu location list --allow-root --path="/var/www/html/"`というコマンドを実行しています。
