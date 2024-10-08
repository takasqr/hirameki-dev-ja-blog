---
title: Nuxt3にBridgeを使って移行してみる【Nuxt2→3】
description: Nuxt3のベータ版が公開されれたので実際にNuxt2からNuxt3に移行してみることにしました。また、新しくNuxt3を作る方法はこちらの記事で紹介してます。Nuxt2の構成です。create-nuxt-app v3.7.1
slug: nuxtjs_bridge
category: nuxt
createDate: 2021/11/06
updated: 2021/11/08
cover: 'https://res.cloudinary.com/t8/image/upload/l_text:Sawarabi%20Gothic_80_bold:Nuxt3にBridgeを使って移行してみる,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: Nuxt3にBridgeを使って移行してみる【Nuxt2→3】
recommend: false
---
## はじめに



Nuxt3のベータ版が公開されれたので実際にNuxt2からNuxt3に移行してみることにしました。

<img src="https://firebasestorage.googleapis.com/v0/b/litely-f6e0d.appspot.com/o/post%2Ftech%2Fnuxt%2Fguide%2FCF648FA7-0CE9-45C3-9B58-C519C4AA608E_600x600.png?alt=media"></img>

また、新しくNuxt3を作る方法はこちらの記事で紹介してます。
<post-card-small slug="nuxtjs_3" lang="ja"></post-card-small>


Nuxt2の構成です。

```
create-nuxt-app v3.7.1
✨  Generating Nuxt.js project in nuxt-bridge
? Project name: nuxt-bridge
? Programming language: JavaScript
? Package manager: Npm
? UI framework: None
? Nuxt.js modules: (Press <space> to select, <a> to toggle all, <i> to invert selection)
? Linting tools: ESLint
? Testing framework: None
? Rendering mode: Single Page App
? Deployment target: Static (Static/Jamstack hosting)
? Development tools: (Press <space> to select, <a> to toggle all, <i> to invert selection)
? Continuous integration: None
? Version control system: Git
```

::self-introduction
::

## やり方
### 1. Nuxt2をアップグレード
1. `package-lock.json`を削除
1. `package.json`の`"nuxt": "^2.15.7"`を`"nuxt-edge": "latest"`に変える
1. `npm install`

### 2. Nuxt Bridgeをインストール

```
npm install -D @nuxt/bridge@npm:@nuxt/bridge-edge
```



### 3. `nuxi`

`package.json`の`script`を`nuxi`を使ったものに変えます。

変更前。
```json
  "scripts": {
    "dev": "nuxt",
    "build": "nuxt build"
  }
```

変更後。
```json
  "scripts": {
    "dev": "nuxi dev",
    "build": "nuxi generate"
  }
```

`dev`、`build`の2つの`script`を変えました。

ここは`target`を`Static target `にするか`Server target`にするかで変わるので[公式サイト](https://v3.nuxtjs.org/getting-started/bridge/#update-your-scripts)を確認して下さい。

### 4. `nuxt.config.js`

`CommonJS`(`module.exports`とか`require`)がサポートされなくなるそうなので書き換えます。

変更前。
```js

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-bridge',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

```

変更後。
```js
import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-bridge',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
})
```

ちなみにこれは将来的に`CommonJS`はサポートされなくなるという話みたいです。なのでやらなくても動きます。
むしろ`import`に変えたらうまくいきませんでした。

### 5. .gitignore

`.output`を追加します。

### その他やること

今回の自分のプロジェクトでは必要ありませんでしたが、必要に応じて行って下さい。

* [tsconfig.jsonの変更](https://v3.nuxtjs.org/getting-started/bridge/#update-tsconfigjson)
* [Migrate Composition API](https://v3.nuxtjs.org/getting-started/bridge/#migrate-composition-api)
* [互換性のないモジュールの削除](https://v3.nuxtjs.org/getting-started/bridge/#remove-incompatible-and-obsolete-modules)



## デバッグしてみる
Bridgeへの移行の設置は完了したので、

デバッグしてみます。

```
npm run dev
```

<img src="https://firebasestorage.googleapis.com/v0/b/litely-f6e0d.appspot.com/o/post%2Ftech%2Fnuxt%2Fguide%2FCF648FA7-0CE9-45C3-9B58-C519C4AA608E_600x600.png?alt=media"></img>


うまくいきました。

## おまけ
`nuxt.config.js`を`CommonJS`から`import`に変えたらデバッグで失敗した。

元々の`CommonJS`方式に戻したら成功しました。

現在、Nuxt3はBeta版なのでそのうちうまくいくようになると思います。

```
 WARN  [worker] Named export 'isWindows' not found. The requested module 'std-env' is a CommonJS module, which may not support all module.exports as named exports.
CommonJS modules can always be imported via the default export, for example using:

import pkg from 'std-env';
const { provider, isWindows } = pkg;


  import { provider, isWindows } from 'std-env';
  ^^^^^^^^^
  SyntaxError: Named export 'isWindows' not found. The requested module 'std-env' is a CommonJS module, which may not support all module.exports as named exports.
  CommonJS modules can always be imported via the default export, for example using:
  
  import pkg from 'std-env';
  const { provider, isWindows } = pkg;
  
  at ModuleJob._instantiate (node:internal/modules/esm/module_job:124:21)
  at async ModuleJob.run (node:internal/modules/esm/module_job:181:5)
  at async Promise.all (index 0)
  at async ESMLoader.import (node:internal/modules/esm/loader:281:24)
  at async loadESM (node:internal/process/esm_loader:88:5)
  at async handleMainPromise (node:internal/modules/run_main:65:12)


```
