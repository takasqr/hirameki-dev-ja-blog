---
title: 【サンプル有】@nuxt/contentを1ページでざっくり理解する
description: NUXTのコンテンツ管理用のモジュールです。/contentの中にmarkdownファイルを置くと、vueコンポーネントの中で取り出して表示したりできます。ブログやドキュメントページと相性がいいと思います。
slug: nuxtjs_content
category: nuxtjs
createDate: 2021/08/12
updated: 
cover: 'https://res.cloudinary.com/t8/image/upload/l_text:Sawarabi%20Gothic_80_bold:【サンプル有】nuxt contentを1ページでざっくり理解する,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: 【サンプル有】@nuxt/contentを1ページでざっくり理解する
recommend: false
---
## @nuxt/contentとは？



NUXTのコンテンツ管理用のモジュールです。

`/content`の中にmarkdownファイルを置くと、vueコンポーネントの中で取り出して表示したりできます。

ブログやドキュメントページと相性がいいと思います。

ファイル形式は、

* JSON
* YAML
* XML
* CSV
* Markdown

に対応しています。

markdownの他にも対応しているようですね。


::self-introduction
::

## @nuxt/contentのメリット
メリットは[公式ページ](https://content.nuxtjs.org/ja)で紹介されていますが主に、

* Markdownの中でVueコンポーネントを使うことができる
* 全文検索
* SSG対応(`nuxt generate`)
* コードブロックのシンタックスハイライト(PrismJS)
* 目次の生成が可能

といったメリットがあります。


## 導入
### インストール

`@nuxt/content`をインストールします。
```bash
npm install @nuxt/content
```


### nuxt.config.js
`nuxt.config.js`を編集します。

```js
{
  modules: [
    '@nuxt/content'
  ],
  content: {
    // Options
  }
}
```

## 使い方

### コンテンツ管理(markdown)
Markdownでコンテンツを管理する方法を紹介します。

1. プロジェクト直下に`/content`ディレクトリを作る
2. `/content`の中に`.md`ファイルを作る
3. `.md`ファイルの中にフロントマターを追加する
4. フロントマターの下にコンテンツを書いていく

こんな感じで書いていきます。

`---`でくくってある部分がフロントマターです。

```md
---
title: 2021年7月サイト運営レポート
description: 2021年7月の振り返りです。
slug: 202107
createDate: 2021/08/01
updated: 
img: first-blog-post.jpg
alt: my first blog post
---
## ふりかえり
7月のはじめにこのサイトを作ってから、更新作業は全然できませんでした。
でもある程度、サイトのネタになりそうな本を読んでメモにまとめたりできたのでよかったです。

後は、ずっとやりたかったDockerコンテナを使った、vscodeの開発環境を作ることができました。
```


### データ取得
コンテンツファイルを作ったら、Vueコンポーネントの中で取得していきます。

コンテンツ一覧を表示するコード。
```vue
<template>
  <div>
    <h1>記事一覧</h1>
    <ul>
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="'post' + article.path">
          <div>
            <h2>{{ article.title }}</h2>
          </div>
        </NuxtLink>
        <p>{{ article.created }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const articles = await $content()
      .only(['title', 'slug', 'path', 'created'])
      .sortBy('created', 'desc')
      .fetch()
    return {
      articles
    }
  }
}
</script>

```

コンテンツを表示するコード。
```vue
<template>
  <article>
    <div v-if="document.image">
      <v-img
        :src="`/cover-image/${document.image}`"
      />
    </div>
    <div v-if="document.created || document.updated">
      <div v-if="document.created">
        公開日：{{ document.created }}
      </div>
      <div v-if="document.updated">
        更新日：{{ document.updated }}
      </div>
    </div>
    <div>
      <h1>{{ document.title }}</h1>
    </div>
    <nuxt-content
      :document="document"
    />
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const documents = await $content().where({ slug: params.slug }).fetch()
    const document = documents[0]
    return {
      document
    }
  }
}
</script>

```

## その他いろいろ
### @nuxt/content-theme-docs
`@nuxt/content-theme-docs`は@nuxt/contentを使って簡単にドキュメントサイトを作れるテンプレートです。

[こんな感じ](https://content.nuxtjs.org/ja)のサイトを数秒で作れます。

```bash
npx create-nuxt-content-docs <project-name>
```
かなり技術ドキュメントよりのデザインですが、本当に簡単に始められます。

### ブログを作る公式チュートリアル

技術ドキュメントじゃなくて、ブログを作りたい人は[このページ](https://ja.nuxtjs.org/blog/creating-blog-with-nuxt-content)がNUXT公式のチュートリアルになります。

英語のページですが、デモページやソースコードの紹介されているのでおススメです。

[Create a Blog with Nuxt Content](https://ja.nuxtjs.org/blog/creating-blog-with-nuxt-content)


## さいごに

Litelyも`@nuxt/content`を使って作っています。
公式ドキュメントも非常にわかりやすいです。


Markdownで記事を管理できるのは楽なのでおススメです。

