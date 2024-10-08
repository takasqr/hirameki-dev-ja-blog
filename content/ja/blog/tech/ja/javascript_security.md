---
title: JavaScript のセキュリティ対策
description: JavaScript でアプリケーションを開発する時に気をつけるべきセキュリティ対策を紹介します。
slug: javascript_security
category: javascript
createDate: 2024/02/24
updated: 
cover: '/thumbnail/javascript_security.jpg'
alt: JavaScript のセキュリティ対策
recommend: true
---

JavaScript でアプリケーションを開発する時に気をつけるべきセキュリティ対策を紹介します。

::self-introduction
::

## ユーザーからの入力値を`href`で直接使わない

`href`で直接、ユーザーが入力した値を使うのは危険です。

運営しているサイトのユーザープロフィールページで、X(Twitter) の URL を登録してリンクとして表示するようなシナリオで考えてみましょう。

ユーザーから入力を受け付けて、`a`タグの`href`属性でリンクを作ると思います。

```html
<a href="https://x.com/takasqr">@takasqr</a>
```

ですが、`href`属性は以下のように`javascript`の実行を指定することもできてしまいます。

```html
<a href="javascript:alert('Alert!')">JavaScript 実行</a>
```

なので、テキストフィールドに`javascript:alert('Alert!')`の形で JavaScript のコードを入力されて、何もしないままに`href`属性に値を設定するとユーザーが JavaScript のコードを実行することができてしまいます。

これを防ぐためには、無害化(サニタイズ)することが大切です。[sanitize-url](https://www.npmjs.com/package/@braintree/sanitize-url) のようなライブラリを使うことも有効です。

### 参考

- [sanitize-url | npm](https://www.npmjs.com/package/@braintree/sanitize-url)

## ユーザーからの入力値を CSS で直接使わない

ユーザーから CSS の入力を受け付けてしまうと、ページの見た目の制御の権限を渡してしまうことになります。これを悪意のある人が悪用すると、ログインページへのリンクの上に、透明にした自分が入力したコンテンツのリンクを被せてしまうかもしれません。リンク先にはオリジナルサイトのログインページを偽装しておけば、認証情報が流出してしまうことにつながってしまいます。

これを防ぐには、ユーザーから生の CSS を受け付けないようにしましょう。もし、スタイルに関する情報をユーザーから受け付ける場合は、CSS の形式ではなく、CSS で使うプロパティの値のみを受け付けるようにしましょう。例えば、カラーコードや、px の値などです。

## eval 関数を使わない

eval 関数は文字列を引数として渡すと Javascript として評価して返します。

```js
console.log(eval('2 + 2'));
// 4
```

これは非常に危険です。使わないようにしましょう。

> 警告: 文字列から JavaScript を実行することは、非常に大きなセキュリティリスクを伴います。eval() を使用すると、悪意のある者が任意のコードを実行することがあまりにも簡単になります。下記の eval() を使わないでください!を参照してください。

### 参考

- [eval() | mdn](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/eval#eval_を使わないでください!)