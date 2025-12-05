---
title: Nuxt3を試してみる
description: Nuxt3のベータ版が公開されれたので実際にプロジェクトを作って試してみることにしました。Nuxt3はVue3に対応したNuxtの次期バージョンで、Typescriptの対応が進んだり、パフォーマンスがよくなったりが期待できます。
slug: nuxtjs_3
category: nuxtjs
createDate: 2021/11/03
updated: 
cover: 'https://res.cloudinary.com/takasqr/image/upload/l_text:Sawarabi%20Gothic_80_bold:Nuxt3を試してみる,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: Nuxt3を試してみる
recommend: false
---
## はじめに



Nuxt3のベータ版が公開されれたので実際にプロジェクトを作って試してみることにしました。

Nuxt3はVue3に対応したNuxtの次期バージョンで、

Typescriptの対応が進んだり、パフォーマンスがよくなったりが期待できます。

[https://v3.nuxtjs.org/](https://v3.nuxtjs.org/)

出来上がりはこんな感じです。

<img src="https://firebasestorage.googleapis.com/v0/b/litely-f6e0d.appspot.com/o/post%2Ftech%2Fnuxt%2Fguide%2F4078304C-B3ED-4186-9217-217DA7A73BF2_600x600.png?alt=media"></img>

また、Nuxt２から移行する方法はこちらの記事で紹介してます。





## プロジェクト作成
### 事前準備

* Node.js
* Visual Studio Code
* Volar Extension

これらのソフトがインストールされている必要があります。

#### Node.js
Nuxt3でプロジェクトを作るためにはnodeのバージョンが14か16である必要があります。

nodeのバージョンを確認してみて、

```
node --version
```

必要に応じてアップデートして下さい。

#### Volar Extension
`Volar Extension`はVisual Studio CodeのプラグインでVue3で開発する時に便利なプラグインです。

> VueLF is a Language Support plugin built specifically for Vue 3. It's based on @vue/reactivity to calculate everything on-demand, to implement native TypeScript language service level performance.

> VueLFは、Vue 3専用に構築された言語サポートプラグインです。これは、@ vue / reactivityに基づいて、すべてをオンデマンドで計算し、ネイティブのTypeScript言語サービスレベルのパフォーマンスを実装します。

[Vue Language Features (Volar) | Visual Studio | Marketplace](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
### プロジェクト作成

プロジェクトを作ります。
```
npx nuxi init nuxt3-app
```

プロジェクトのディレクトリに移動します。
```
cd nuxt3-app
```

モジュールをインストールします。

```
npm install
```

ローカルで立ち上げてみます。
```
npm run dev
```

このようにサイトが立ち上がれば成功です。

<img src="https://firebasestorage.googleapis.com/v0/b/litely-f6e0d.appspot.com/o/post%2Ftech%2Fnuxt%2Fguide%2F4078304C-B3ED-4186-9217-217DA7A73BF2_600x600.png?alt=media"></img>

サイト自体は非常に簡単に作ることができました。後、いろんなところで言われている事ですが、`Vite`が立ち上がるのがすごく早いのでデバッグ時のストレスが減りそうです。

## おまけ
ちなみに、ローカルで立ち上げた時に`http://localhost:3000/`にブラウザでアクセスすると一瞬サイトが表示されるのですが、その後すぐに真っ白になってしまいました。

コンソールを確認すると、

```
[Vue warn]: Hydration node mismatch:
- Client vnode: App 
- Server rendered DOM: 
<div> <empty string> 
  at <NuxtRoot>
```

```
Hydration completed but contains mismatches.
```

と警告とエラーが出ていました。

ですが、IPアドレス(`http://192.168.xxx.xxx:3000/`)でアクセスするとちゃんと表示されました。

Nuxt3は現在Beta版なので、とりあえずこのエラーは深追いするのはやめました。きっとリリースされる時には出なくなるはずです。