---
title: NuxtでGoogle Adsense広告を表示する【ライブラリなし】
description: アドセンスの広告を表示しようとすると、下のようなコードを貼り付けるように表示されると思います。ですがこのコードをNuxtの.vueに貼り付けてもうまくいきません。そこで、Nuxt.jsで使えるようにコードをカスタマイズする方法を紹介します。
slug: google_adsense_nuxtjs
category: google
createDate: 2022/01/17
updated: 
cover: 'https://res.cloudinary.com/t8/image/upload/l_text:Sawarabi%20Gothic_80_bold:NuxtでGoogle Adsense広告を表示する【ライブラリなし】,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
recomended: true
---


## NuxtでGoogeleアドセンス広告を表示したい



アドセンスの広告を表示しようとする時にサイトに下のようなコードを貼り付けるように表示されると思います。

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx"
     crossorigin="anonymous"></script>
<!-- ヘッダー -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
     data-ad-slot="xxxxxxxxxx"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
```

ですがこのコードをNuxtの`.vue`に貼り付けてもうまくいきません。

そこで、Nuxt.jsで使えるようにコードをカスタマイズする方法を紹介します。
カスタマイズといってもかなり簡単です。

`.vue`コンポーネントの部分はVue.jsでも使えると思います。

::self-introduction
::

## 手順

1. `nuxt.config.js`でライブラリ読み込み
1. 広告部分を`AdInPost.vue`にコンポーネント化
1. 広告コンポーネントを別コンポーネント(`post.vue`)から呼び出し

### 1. `nuxt.config.js`でライブラリ読み込み

```js[nuxt.config.js]
export default {
  head: {
    script: [
      {
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx',
        async: true,
        crossorigin: 'anonymous'
      }
    ]
  }
}
```

### 2. 広告部分を`AdInPost.vue`にコンポーネント化

```vue[AdInPost.vue]
<template>
  <ins
    class="adsbygoogle"
    style="display:block"
    data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
    data-ad-slot="xxxxxxxxxx"
    data-ad-format="auto"
    data-full-width-responsive="true"
  />
</template>

<script>
export default {
  mounted () {
    const adsbygoogle = window.adsbygoogle || []
    adsbygoogle.push({})
  }
}
</script>
```

### 3. 広告コンポーネントを別コンポーネント(`post.vue`)から呼び出し

```vue[post.vue]
<template>
  <AdInPost />
</template>

<script>
import AdInPost from '@/components/component/AdInPost.vue'

export default {
  components: {
    AdInPost
  }
}
</script>
```

これで広告部分をコンポーネント化することが出来たので他の場所でも使い回すことができるようになりました。