---
title: Git で過去の状態に戻す
description: Git で過去の状態に戻したい。Git を使っていて、特定のコミットに戻ってビルドし直したい時などに使えるテクニックです。
slug: git-rollback-to-commit
category: git
createDate: 2024/05/08
updated: 
cover: 'https://res.cloudinary.com/t8/image/upload/l_text:Sawarabi%20Gothic_80_bold:Git で過去の状態に戻す,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: Git で過去の状態に戻す
recommend: true
---

## Git で過去の状態に戻したい

Git を使っていて、特定のコミットに戻ってビルドし直したい時などに使えるテクニックです。

::self-introduction
::

## やり方

### コミット名を確認

コミット名を確認します。

```bash
git log
```

以下のような感じで出てくるので、`6f27eecc7f56ab6be6be096f535919b0f2bdf482`のようなところを確認します。今回は「コミット２」から「コミット１」に戻ります。

```
commit 3ba2179f4977760b2db5194adcaa333649601b7e (HEAD -> main, origin/main, origin/HEAD)
Author: takasqr <99999999+xxxx@users.noreply.takasqr.com>
Date:   Fri Apr 26 23:13:31 2024 +0900

    コミット２

commit 6f27eecc7f56ab6be6be096f535919b0f2bdf482
Author: takasqr <99999999+xxxx@users.noreply.takasqr.com>
Date:   Fri Apr 26 23:12:54 2024 +0900

    コミット１
```

### 過去に移動


```bash
git checkout 6f27eecc7f56ab6be6be096f535919b0f2bdf482
```

### 最新に戻る

```bash
git checkout master
```

`master`の部分はブランチ名です。状況に合わせて読み替えてください。

