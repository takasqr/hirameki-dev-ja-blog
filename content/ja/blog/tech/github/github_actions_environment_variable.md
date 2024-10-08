---
title: GitHub Actions で環境変数を渡す
description: GitHub Actions で環境変数を渡す方法を紹介します。node での利用を想定していますが、他の環境でも応用できると思います。
slug: github_actions_environment_variable
category: github
createDate: 2024/04/25
updated: 
cover: 'https://res.cloudinary.com/t8/image/upload/l_text:Sawarabi%20Gothic_80_bold:GitHub Actions で環境変数を渡す,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: GitHub Actions で環境変数を渡す
recommend: true
---

GitHub Actions で環境変数を渡す方法を紹介します。
node での利用を想定していますが、他の環境でも応用できると思います。

## GitHub サイトでの作業
1. リポジトリのページで Settings タブを選択する
2. `Secrets and variables`を選択する
3. `Actions`を選択する
4. `Variables`を選択する
5. `Repository variables`横の`New repository variables`から環境変数を追加する

## コード

`.github/workflows`内の`.yml`を編集する。

```yaml
- run: npm ci && npm run build
  env:
    GTM_ID: ${{ vars.GTM_ID }}
```

`.js`内での利用は以下のような書き方。

__Node__
```js
process.env.GTM_ID
```

__Vite__
```js
import.meta.env.VITE_GTM_ID
```
Vite で利用する場合は`VITE_`をつける必要があります。

## 参考

[環境変数とモード | Vite](https://ja.vitejs.dev/guide/env-and-mode)