---
title: Dockerで不要になったimageやcontainerを一括削除【system prune】
description: 
slug: docker_system_prune
category: docker
createDate: 2019/06/19
updated: 
cover: 'https://res.cloudinary.com/takasqr/image/upload/l_text:Sawarabi%20Gothic_80_bold:Dockerで不要になったimageやcontainerを一括削除【system prune】,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: Dockerで不要になったimageやcontainerを一括削除【system prune】
recommend: false
---


::self-introduction
::


## Dockerの掃除
```bash
docker system prune
```

```
WARNING! This will remove:
        - all stopped containers
        - all networks not used by at least one container
        - all dangling images
        - all build cache
Are you sure you want to continue? [y/N] y
```
一度でいろんなものが削除されるので注意。
