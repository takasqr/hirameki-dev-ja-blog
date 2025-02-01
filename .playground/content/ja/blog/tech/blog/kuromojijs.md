---
title: kuromoji.jsでJavascript製の形態素解析APIを作る
description: 最近、文章を単語に分割して、単語ごとに類語を表示するWebアプリを作ったのですが、文章を単語に分割する時にkuromoji.jsを使って形態素解析できるWeb APIを作りました。
slug: kuromojijs
category: npm
createDate: 2021/10/21
updated: 
cover: 'https://res.cloudinary.com/takasqr/image/upload/l_text:Sawarabi%20Gothic_80_bold:kuromoji.jsでJavascript製の形態素解析APIを作る,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: kuromoji.jsでJavascript製の形態素解析APIを作る
recommend: false
---
## はじめに



### 何を作ったのか?

最近、文章を単語に分割して、単語ごとに類語を表示するWebアプリを作ったのですが、文章を単語に分割する時にkuromoji.jsを使って形態素解析できるWeb APIを作りました。

::self-introduction
::


### 形態素解析ってなに?
> 形態素解析（けいたいそかいせき、Morphological Analysis）とは、文法的な情報の注記の無い自然言語のテキストデータ（文）から、対象言語の文法や、辞書と呼ばれる単語の品詞等の情報にもとづき、形態素（Morpheme, おおまかにいえば、言語で意味を持つ最小単位）の列に分割し、それぞれの形態素の品詞等を判別する作業である。
[形態素解析 | Wikipedia](https://ja.wikipedia.org/wiki/%E5%BD%A2%E6%85%8B%E7%B4%A0%E8%A7%A3%E6%9E%90)

ざっくり言うと、文章を単語に分割する作業のことみたいです。例えば英語は単語をスペースで区切って書くルールがあるので機械的に単語を抽出できますが、日本語とかは単語が連続しているので形態素解析を使って文章から単語を抽出するイメージです。

今回はkuromoji.jsと言うjavascriptで形態素解析できるライブラリを使って、Web APIを作りました。

[https://www.npmjs.com/package/kuromoji](https://www.npmjs.com/package/kuromoji)

デプロイ先はFirebase Functionsです。

## コード
### Web API(Firebase Functions)
Firebase Functionsのコード。Web APIの部分。

```js
const functions = require('firebase-functions');
const kuromoji = require("kuromoji");

exports.kuromoji = functions.region('asia-northeast1').runWith({ timeoutSeconds: 540, memory: "1GB" }).https.onRequest(async (req, res) => {
  
  let returnValue = await tokenize(req.query.token).then(async (data) => {
    return data
  })
  res.status(200).header('Access-Control-Allow-Origin', '*').send(returnValue);
})

function tokenize(token) {
  return new Promise(resolve => {
    var path = null
    kuromoji.builder({ dicPath: "./node_modules/kuromoji/dict/" }).build((err, tokenizer) => {
      if (err) {
        functions.logger.error("error:", err);
      }
      // tokenizer is ready
      path = tokenizer.tokenize(token);
      functions.logger.log('path:', path)
      resolve(path)
    });
  })
}
```
`async/await`を使うために`tokenize`と言う関数に切り出しています。

### 呼び出し側(React)
react側のコードです。
axiosを使って呼び出します。

```js
    const input = ''
    let word = [{}]

    await Axios
      .get('https://asia-northeast1-xxxx-xxxxx.cloudfunctions.net/kuromoji?token=' + input)
      .then(res =>  word = res)
      .catch(error => console.log(error))

    console.log(word.data)
```

vueでもaxiosを使えるので同じように書けるはずです。

### 戻り値

Firebase functionsから値が返ってくるので、取り出します。

react側の、

```js
console.log(word.data)
```

の部分です。

```json
[
    {
        "word_id": 120,
        "word_type": "UNKNOWN",
        "word_position": 1,
        "surface_form": "kuromoji",
        "pos": "名詞",
        "pos_detail_1": "固有名詞",
        "pos_detail_2": "組織",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "*"
    },
    {
        "word_id": 80,
        "word_type": "UNKNOWN",
        "word_position": 9,
        "surface_form": ".",
        "pos": "名詞",
        "pos_detail_1": "サ変接続",
        "pos_detail_2": "*",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "*"
    },
    {
        "word_id": 100,
        "word_type": "UNKNOWN",
        "word_position": 10,
        "surface_form": "js",
        "pos": "名詞",
        "pos_detail_1": "一般",
        "pos_detail_2": "*",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "*"
    },
    {
        "word_id": 91990,
        "word_type": "KNOWN",
        "word_position": 12,
        "surface_form": "で",
        "pos": "助詞",
        "pos_detail_1": "格助詞",
        "pos_detail_2": "一般",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "で",
        "reading": "デ",
        "pronunciation": "デ"
    },
    {
        "word_id": 2152980,
        "word_type": "KNOWN",
        "word_position": 13,
        "surface_form": "形態素",
        "pos": "名詞",
        "pos_detail_1": "一般",
        "pos_detail_2": "*",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "形態素",
        "reading": "ケイタイソ",
        "pronunciation": "ケイタイソ"
    },
    {
        "word_id": 345930,
        "word_type": "KNOWN",
        "word_position": 16,
        "surface_form": "解析",
        "pos": "名詞",
        "pos_detail_1": "サ変接続",
        "pos_detail_2": "*",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "解析",
        "reading": "カイセキ",
        "pronunciation": "カイセキ"
    },
    {
        "word_id": 3011740,
        "word_type": "KNOWN",
        "word_position": 18,
        "surface_form": "する",
        "pos": "動詞",
        "pos_detail_1": "自立",
        "pos_detail_2": "*",
        "pos_detail_3": "*",
        "conjugated_type": "サ変・スル",
        "conjugated_form": "基本形",
        "basic_form": "する",
        "reading": "スル",
        "pronunciation": "スル"
    }
]
```
## おまけ

kuromoji.jsを使う前にやっていた、分かち書きコード。

```js
    const x = /[一-龠]+|[ぁ-ん]+|[ァ-ヴー]+|[a-zA-Z0-9]+|[ａ-ｚＡ-Ｚ０-９]+/g
    const word = input.match(x)
```

漢字、ひらがな、カタカナ、数字などで分けるだけなので、例えば`走る`だと、`走`と`る`に別れてしまう。
でもライブラリなしでできるのがメリット。