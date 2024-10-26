---
title: wordnet日本語版(sqlite)を使って類語Web APIを作った
description: 最近、文章を単語に分割して、単語ごとに類語を表示するWebアプリを作ったのですが、文章を単語に分割する時にwordnet日本語版を使って関連語を返すWeb APIを作りました。作ったWebアプリはこれです。
slug: wordnet_japanese
category: dev
createDate: 2021/10/26
updated: 
cover: 'https://res.cloudinary.com/t8/image/upload/l_text:Sawarabi%20Gothic_80_bold:wordnet日本語版(sqlite)を使って類語Web APIを作った,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: wordnet日本語版(sqlite)を使って類語Web APIを作った
recommend: false
---
## はじめに



### 何を作ったのか?

最近、文章を単語に分割して、単語ごとに類語を表示するWebアプリを作ったのですが、文章を単語に分割する時にwordnet日本語版を使って関連語を返すWeb APIを作りました。

作ったWebアプリはこれです。

<img src="https://firebasestorage.googleapis.com/v0/b/litely-f6e0d.appspot.com/o/post%2Ftech%2Fnpm%2Fpackage%2F74689C52-F05B-409E-9A52-E4AB253ED68D.gif?alt=media"></img>

[言葉カタログ | 類語を使ったネーミングツール](https://word.litely.net/)


::self-introduction
::

### wordnetってなに?
> WordNet（ワードネット）は英語の概念辞書（意味辞書）である。WordNetでは英単語がsynsetと呼ばれる同義語のグループに分類され、簡単な定義や、他の同義語のグループとの関係が記述されている。 WordNetの目的は直感的に使うことのできる辞書とシソーラスが組み合わされた成果物を作ること、および自動的文書解析や人工知能のアプリケーションの実現を支援することにある。WordNetのデータベースやソフトウェアはBSDライセンスによって公開され、自由にダウンロードして用いることができる。データベースはオンラインで参照することもできる。
[WordNet | Wikipedia](https://ja.wikipedia.org/wiki/WordNet)

今回はWordNet日本語版を使って、Web APIを作りました。

[日本語 WordNet](http://compling.hss.ntu.edu.sg/wnja/)

デプロイ先はFirebase Functionsです。

### sqliteファイルをWeb API化する
WordNetの日本語版のSQLiteのファイルは200Mあります。
このファイルをFirebase functionsにデプロイしてfuncitons上でsqliteファイルにアクセスしてjsonとして返してます。

* そもそも200Mのファイルをfirebase functionsにデプロイできるのか?
* 処理速度(パフォーマンス)は問題ないか?

等々の懸念はありましたが、やってみると案外問題なかったです。

## コード
### Web API(Firebase Functions)
Firebase Functionsのコード。Web APIの部分。

```js
const functions = require('firebase-functions');
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./data/wnjpn.db");

exports.wnpa = functions.region('asia-northeast1').runWith({ timeoutSeconds: 540, memory: "1GB" }).https.onRequest(async (req, res) => {

  let returnValue = await relatedWord(req.query.lemma, req.query.lang).then(async (data) => {
    return data
  })

  res.status(200).header('Access-Control-Allow-Origin', '*').send(returnValue);
});

function relatedWord(lemma, lang) {
  return new Promise(resolve => {
    let data = []
    let sql = ''
    sql = sql + ' select'
    sql = sql + '  t002.wordid as wordid_original,'
    sql = sql + '  t001.lang,'
    sql = sql + '  t001.lemma as lemma_original,'
    sql = sql + '  t002.synset,'
    sql = sql + '  t003.wordid as wordid_network,'
    sql = sql + '  t004.lemma as lemma_network'
    sql = sql + ' from'
    sql = sql + '  word t001'
    sql = sql + '  inner join sense t002'
    sql = sql + '   on'
    sql = sql + '   t001.wordid = t002.wordid'
    sql = sql + '  inner join sense t003'
    sql = sql + '   on'
    sql = sql + '   t002.synset = t003.synset'
    sql = sql + '  inner join word t004'
    sql = sql + '   on'
    sql = sql + '   t003.wordid = t004.wordid'
    sql = sql + ' where'
    sql = sql + '  (t001.lemma = $lemma)'
    sql = sql + '  and'
    sql = sql + '  (t001.lang = $lang)'

    db.each(sql, { $lemma: lemma, $lang: lang }, (err, row) => {
      if (err) {
        functions.logger.error("error:", err);
      }
      console.log(row)
      data.push({
        wordid_original: row.wordid_original,
        lang: row.lang,
        lemma_original: row.lemma_original,
        synset: row.synset,
        wordid_network: row.wordid_network,
        lemma_network: row.lemma_network
      })
    }, (err, count) => {
      console.log(err)
      if (err) {
        functions.logger.error("error:", err);
      }
      resolve(data)
    });
  })
}
```
`async/await`を使うために`relatedWord`と言う関数に切り出しています。

### 呼び出し側(React)
react側のコードです。
axiosを使って呼び出します。

```js
const input = '博物館'
Axios
    .get('https://asia-northeast1-xxxx-xxxxx.cloudfunctions.net/wnpa?lemma=' + input + '&lang=jpn')
    .then((res) => {
    console.log(res.data)
    })
    .catch(error => console.log(error))
```

vueでもaxiosを使えるので同じように書けるはずです。

### 戻り値

Firebase functionsから値が返ってくるので、取り出します。

react側の、

```js
console.log(res.data)
```

の部分です。

```json
[
  {
    "wordid_original": 211236,
    "lang": "jpn",
    "lemma_original": "博物館",
    "synset": "03800563-n",
    "wordid_network": 46258,
    "lemma_network": "museum"
  },
  {
    "wordid_original": 211236,
    "lang": "jpn",
    "lemma_original": "博物館",
    "synset": "03800563-n",
    "wordid_network": 166702,
    "lemma_network": "ミュージアム"
  },
  {
    "wordid_original": 211236,
    "lang": "jpn",
    "lemma_original": "博物館",
    "synset": "03800563-n",
    "wordid_network": 211236,
    "lemma_network": "博物館"
  },
  {
    "wordid_original": 211236,
    "lang": "jpn",
    "lemma_original": "博物館",
    "synset": "03800563-n",
    "wordid_network": 214478,
    "lemma_network": "美術館"
  },
  {
    "wordid_original": 211236,
    "lang": "jpn",
    "lemma_original": "博物館",
    "synset": "03800563-n",
    "wordid_network": 244859,
    "lemma_network": "総合博物館"
  }
]
```