---
title: 【Vue3】createdとは？使い方を紹介する
description: createdはvueインスタンスが作られたすぐ後に呼び出されます。Option APIでコンポーネントを作っていく時はcreatedの中に書きます。Composition APIではcreatedオプションはなくなっています。Composition APIでcreatedに相当する処理を作っていく時はsetupの中に書きます。
slug: vuejs_created
category: vuejs
createDate: 2022/07/29
updated: 
cover: 'https://res.cloudinary.com/takasqr/image/upload/v1659161357/vuejs_created_znc9uu.png'
alt: 【Vue3】createdとは？使い方を紹介する
recommend: false
---
## vuejsのcreatedとは

`created`は`vue`インスタンスが作られたすぐ後に呼び出されます。





## createdの使い方

### Option APIでのcreated

`Option API`でコンポーネントを作っていく時は`created`の中に書きます。

```vue
<script>
export default {
  created: function () {
    console.log('created!')
  }
}
</script>
```

### Composition APIでのcreated

`Composition API`では`created`オプションはなくなっています。`Composition API`で`created`に相当する処理を作っていく時は`setup`の中に書きます。

```vue
<script>
export default {
  setup() {
    console.log('created!')
  }
}
</script>
```

[ライフサイクルフック | Composition API | Vue.js](https://v3.ja.vuejs.org/api/composition-api.html#%E3%83%A9%E3%82%A4%E3%83%95%E3%82%B5%E3%82%A4%E3%82%AF%E3%83%AB%E3%83%95%E3%83%83%E3%82%AF)

### createdの中でmethodを呼び出す

createdの中でmethodを呼び出すことも出来ます。

```vue
<script>
  export default {
    created: function () {
      console.log('created!')
      this.myMethod()
    },
    methods: {
      myMethod() {
        console.log('myMethod start!')
      }
    }
  }
</script>
```

[Vue SFC Playgroundはこちら](https://sfc.vuejs.org/#eNp9kE1OwzAQha9ivGkqNfY+qpA4ADfwJiSTxlX8o5lJAVW5O3ZwCCoSG4/95ukbv7nLlxjVbQbZyDN1aCM/Gy8EfMSALHoY2nlicc+aEB1Cy9A3Yph9xzZ4UR23XuoGT2ECNYVLdSjWp8Nxa/NoSbnPV+Ax9FWRl9N3datKzU7bnbv2MGOzCOIW+deopcBzScdZl2TyJK3LwWrXRnWl4FPslW5Kg4z8+YORaS/5beTIHKnRmoYuL+tKKuBFp5vC2bN1oIBc/YbhnQAT2MiSa2XoJN4AawTfAwL+x3yw/uGWSItcvgCp45E3)

## createdとmountedの違い
createdとmountedの違いは、createdが先に呼び出されて、mountedが後に呼び出されます。

### createdで操作できるもの
* data
* computed
* properties
* methods
* watch

### createdで操作できないもの
* $el

`$el`を操作できないのは、`created`の時点ではDOMの描画が終わってないからです。

## async/awaitなcreated

`async/await`を`created`で使って、非同期処理を同期的に書きたい時があるかも知れません。
そんな時の書き方を紹介します。

まずは非同期のままのコードです。

```vue
<script>
  export default {
    created: function () {
      const timer = function(step, time) {
        return new Promise(resolve => {
          setTimeout(() => {
            console.log("step " + step)
            resolve()
          }, time)
        })
      }

      timer(1, 3000)
      timer(2, 1000)
    }
  }
</script>
```

[Vue SFC Playgroundはこちら](https://sfc.vuejs.org/#eNp9UcFuwjAM/RUrp6CVFrZbBUj7gx12zIUVw4raJLLdMgn135eUthQm7RI5zy/v5dlX9e592jaocrXhgkovO2MB8Mc7Ejjgcd9UAteIARSEe8FDDsfGFlI6C3ox9kLXWRaQskaC7UTRLOiTHp5xAQilIQsWL/BBri4ZNSG7qkXY7uZEAEb5DM9dIzr4PXdvxq7CtHInbVT0A6PgBWK1eKQOFvoB7obv3bFuqjtjx7JPptcJvK1Wq4lwQ18TWN/R8Kg/NtkwUpWoso4TXdZ7n57Z2TDvPoUZGmxUPuYyKiwk3o36FvGcZxkfi7ilM6eOTlmoUmpstE6R6+UXuQsjBWGjkplGFsAWaUloD0hI/2k+Uf/oDpE61f0Chjqu7g==)

結果は下のようになるはずです。

```
step 2
step 1
```

後から実行した、`timer(2, 1000)`の方が時間が短いので先にコンソールに出力されます。

今度は`async/await`を使って書きます。

```vue
<script>
  export default {
    created: async function () {
      const timer = function(step, time) {
        return new Promise(resolve => {
          setTimeout(() => {
            console.log("step " + step)
            resolve()
          }, time)
        })
      }

      await timer(1, 3000)
      await timer(2, 1000)
    }
  }
</script>
```

[Vue SFC Playgroundはこちら](https://sfc.vuejs.org/#eNp9UcFuwjAM/RUrp6CVFrZbBUj7gx12zKUrhhW1SWS7sAn135d0bSlM2iVynl/ey7Ov6tX79NyiytWGS6q87IwFwC/vSGCPh6KtBa4RAygJC8F9DgV/2xIOrS2lchb0YmQEjrMsIFWDBNuJolnQJz084wIQSksWLF7gjVxTMWpCdvUZYbubEwEY5T08d63o4PfY/TV2Naa1O2qjoh8YBU8Qq8U9dbDQd3A3fO+GdVPdGTuWxaWohnx6ncDLarWaaPPecwLrWy8I9McmG4asElU1ccbLpvDpiZ0NG+gTmaHBRuVjRqPCiuLdqE8Rz3mW8aGMeztx6uiYhSql1kbrFLlZfpC7MFIQNiqZaWQBPCMtCe0eCek/zQfqH90hUqe6H0c7tZg=)

結果は下のようになるはずです。

```
step 1
step 2
```

`async/await`が効いて、`await timer(1, 3000)`の後に`await timer(2, 1000)`されています。