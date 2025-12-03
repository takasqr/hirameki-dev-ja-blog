---
title: Vue.js で head タグを設置する
description: Vue3 で`<head>`タグを制御するには Unhead というパッケージを使うのがメジャーな方法なようです。Unhead は Nuxt3 でも採用されています。
slug: vuejs_head
category: vuejs
createDate: 2024/04/21
updated: 
cover: 'https://res.cloudinary.com/takasqr/image/upload/l_text:Sawarabi%20Gothic_80_bold:Vue.js で head タグを設置する,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: Vue.js で head タグを設置する
recommend: true
---


Vue3 で`<head>`タグを制御するには Unhead というパッケージを使うのがメジャーな方法なようです。
Unhead は Nuxt3 でも採用されています。


## やり方

試しに noindex を設置してみます。

### パッケージをインストール
 
 ```bash
 npm install @unhead/vue
 ```
 
### パッケージを読み込む
 
 ```js
 import { createApp } from 'vue'
import { createHead } from '@unhead/vue'

const app = createApp()

const head = createHead()
app.use(head)

app.mount('#app')

 ```
 
 ### ページごとに設置
 
 ```vue
 <script setup lang=ts>
import { useHead } from '@unhead/vue'

useHead({
  meta: [
    { name: 'robots', content: 'noindex' }
  ]
})
</script>

 ```

 
[Install Vue Unhead | Unhead](https://unhead.unjs.io/setup/vue/installation)
 
 
## 例

### `title` & `description`

```js
useHead({
  meta: [
    { name: 'title', content: 'シェルの技術ブログ' },
    { name: 'description', content: 'シェル(@takasqr)の技術ブログです。' },
  ],
})
 ```

### Open Graph(OGP)
 
```js
useHead({
  meta: [
    // Open Graph
    { property: 'og:url', content: 'https://blog.takasqr.dev/' },
    { property: 'og:title', content: 'シェルの技術ブログ' },
    { property: 'og:description', content: 'シェル(@takasqr)の技術ブログです。' },
    { property: 'og:image', content: 'https://blog.takasqr.dev/ogp_image.jpg' }
  ],
})
 ```


### Google Tag Manager(GTM)

GTM の ID は`.env`で設定しています。

```js
useHead({
  script: [
    {
      innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','${process.env.GTM_ID}');` 
    }
  ],
  noscript: [
    {
      innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      tagPosition: 'bodyOpen'
    }
  ]
})
 ```
 
### Twitter(X) Card
 
```js
useHead({
  meta: [
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@takasqr' },
    { name: 'twitter:creator', content: '@takasqr' },
  ],
})
 ```
 
### サムネイル
 
```js
useHead({
  meta: [
    { name: 'thumbnail', content: 'https://blog.takasqr.dev/thumbnail.jpg' }
  ],
})
 ```