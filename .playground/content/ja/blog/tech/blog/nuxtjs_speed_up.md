---
title: NUXTで作ったWebサイトの表示速度を高速化する
description: nuxtとvuetifyで作ったこのサイトですが、出来上がった時はあまり表示速度が速くありませんでした。Lighthouseでスコアを測ったらパフォーマンスのスコアが37でした。。。遅い。。少しずつ改善してきて、今では前よりだいぶ速くなってきました。Lighthouseのパフォーマンスのスコアも70まで上がりました。
slug: nuxtjs_speed_up
category: nuxt
createDate: 2021/08/11
updated: 2021/08/29
cover: 'https://res.cloudinary.com/takasqr/image/upload/l_text:Sawarabi%20Gothic_80_bold:NUXTで作ったWebサイトの表示速度を高速化する,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: NUXTで作ったWebサイトの表示速度を高速化する
recommend: false
---
## はじめに



nuxtとvuetifyで作ったこのサイトですが、出来上がった時はあまり表示速度が速くありませんでした。
Lighthouseでスコアを測ったらパフォーマンスのスコアが37でした。。。遅い。。

少しずつ改善してきて、今では前よりだいぶ速くなってきました。
Lighthouseのパフォーマンスのスコアも70まで上がりました。

やったことを紹介します。

デプロイ構成は、
```
target static
ssr true
```
です。

::self-introduction
::

## やったこと

### いらないコンポーネントを読み込まない
v-ifで絶対trueにならないコンポーネントはありませんか？

私はありました。笑

### いらないライブラリを消す
必要だと思ってインストールしたけど、結局使ってないライブラリをアンインストールすることでバンドルされるファイルの容量を減らすことができたりします。

この時もちろんコンポーネントのimportは消します。

### 画像遅延読み込み
imgタグに遅延読み込み用の粗い画質の軽い画像を設定することで、まず遅延読み込み用の画像を表示してくれます。

```html
<v-img
    :src="`/cover-image/${article.image}`"
    :lazy-src="`/cover-image/${article.lazy}`"
/>
```


### 画像をプリロード
イメージファイルや`.js`ファイルを`head`で事前に読み込むことで、`body`で必要になってからダウンロードするより早い時点で画像が利用可能になります。

アイキャッチ画像を事前に読み込むことにしました。
```vue
<script>
export default {
  head () {
    return {
      link: [
        {
          rel: 'preload',
          // /cover-image/content_obi-onyeador-9VFdIsfkn0M-unsplash_m.jpg
          href: '/cover-image/' + this.document.image,
          as: 'image'
        }
      ]
    }
  }
}
</script>
```

### 画像サイズ変更
アイキャッチ画像などの画像を、このサイトである程度画質を保ったまま容量を落とすことが出来ます。

サイズも必要最低限のサイズに変更します。

[https://squoosh.app/](https://squoosh.app/)

### vuetifyアセット最適化
vuetifyはデフォルトでgoogleフォントとマテリアルアイコンのセットを読み込むようになっています。

ですが今回はgoogleフォントは必要なかったのと、アイコンも数個しか必要ないので

* googleフォントを読み込まないように
* 必要なマテリアルアイコンのみ読み込む

ように変更しました。

ちなみにvuetifyの使っているコンポーネントのみビルドに含めてくれるツリーシェイクは、`nuxt create`からプロジェクトを作っていればデフォルトで有効になっているみたいです。

### ライブラリをdefer
初期表示で必要ないライブラリを`defer`で読み込むことで、画面描画のスピードを上げることができます。

google analyticsとclarityを`defer`で読み込む事にしました。



### cdn配信
`.html`や`.js`ファイルを世界中の配信用高速サーバーにキャッシュして配信することで、オリジンサーバーから配信するよりサーバーのレスポンス時間が短くなることがあります。

ちょうどDNSサービスでcloudflareを使っていて、CDN配信も無料プランで出来たのでcloudflareを使っています。

他にもAWSのcloudfrontなどのサービスを使うことでCDN配信することが出来ます。


### webpack チャンク
webpackは

ビルドされるjsファイルを分割する設定です。

ある程度細かくすることで、現在のページでは必要ない javascriptコードを読み込まなくすることができます。

細かくし過ぎるとダウンロードのオーバーヘッドが影響してスコアが悪化することもあるので注意です。

### v-img → img
1. v-imgで設定したアイキャッチ画像が`Largest Contentful Paint`に指定される
1. v-imgで指定された画像はビルドされた.jsファイルの中で呼び出される
1. ビルドされた.jsファイルはdeferがついているので画像が呼び出されるのは一連のファイルのなかでも後半になってしまう
1. `Largest Contentful Paint`のスコアが悪くなってしまう

ということが起きているようでした。

それだったら普通のimgタグにすればどうだろうと試したら効果的面でした。

## さいごに
様々な対策をすることでlighthouseのパフォーマンスのスコアを37から70まで上げることができました。
