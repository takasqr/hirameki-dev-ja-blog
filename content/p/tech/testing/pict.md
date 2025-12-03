---
title: PICT でペアワイズ法(オールペア法)を使ったテストを作る
description: 
slug: pict
category: testing
createDate: 2024/04/20
updated: 
cover: 'https://res.cloudinary.com/takasqr/image/upload/l_text:Sawarabi%20Gothic_80_bold:PICT でペアワイズ法(オールペア法)を使ったテストを作る,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: PICT でペアワイズ法(オールペア法)を使ったテストを作る
recommend: true
---



## ペアワイズ法とは？

ペアワイズ法(オールペア法)とは、

> ほとんどの場合、プログラムのバグを引き起こすのは、1 つの入力パラメータか 2 つのパラメータ間の相互作用である

[All-pairs testing - Wikipedia](https://en.m.wikipedia.org/wiki/All-pairs_testing)

という前提にたってテストパターンを作成する方法です。

全パラメータを網羅するのではなく、2つのパラメータを網羅的にテストすることでテストケースを大幅に減らすことができます。

3つのパラメータが組み合わさった時に起きるバグは検知できないかもしれないことに注意してください。

ただ、テストケースを大幅に減らせることはかなりのメリットになると思います。

::self-introduction
::

## PICT でテストケースを作る

### 環境構築

Microsoft からツールが公開されている。

[GitHub - microsoft/pict: Pairwise Independent Combinatorial Tool](https://github.com/microsoft/pict)

Mac、Linux で行うためにはビルドが必要。
私は Mac で作業を行いました。


リポジトリをクローンしてくる。

```
git clone https://github.com/microsoft/pict.git
```

ビルドする。

```
make
```

```
./pict
```

と実行すると以下のように表示される。

```
Pairwise Independent Combinatorial Testing

Usage: pict model [options]

Options:
 /o:N|max         - Order of combinations (default: 2)
 /d:C             - Separator for values  (default: ,)
 /a:C             - Separator for aliases (default: |)
 /n:C             - Negative value prefix (default: ~)
 /e:file          - File with seeding rows
 /r[:N]           - Randomize generation, N - seed
 /f[:text|json]   - Output format (default: text)
 /c               - Case-sensitive model evaluation
 /s               - Show model statistics
```

インストール完了。

本当はパスを通した方が使いやすいですが、私は無闇にパスを通したくないので。

コマンドを実行するときにパスを指定して使っています。

### やり方

テストしたい要素をテキストファイルに書いていきます。

下の例はブラウザと OS の組み合わせでテストする想定の項目です。

```
OS: Windows, MacOS, Linux, iOS, Android
ブラウザ: Safari, Chrome
```

ありえないパターンが作られるのを避ける方法も提供されています。

```
IF [OS] = "Windows"   THEN [ブラウザ] = "Chrome";
```

このように条件式を書くことでカスタマイズすることができます。上の例だと Windows に Safari をインストールする事はできないので必ず Chrome になるように条件を足しました。

```
OS: Windows, MacOS, Linux, iOS, Android
ブラウザ: Safari, Chrome

IF [OS] = "Windows"   THEN [ブラウザ] = "Chrome";
IF [OS] = "Linux"   THEN [ブラウザ] = "Chrome";
IF [OS] = "Android"   THEN [ブラウザ] = "Chrome";
```


`pict`を実行します。

```
./pict test_case_example.txt
```

テストケースを作ることができました。

```
OS      ブラウザ
MacOS   Safari
Linux   Chrome
iOS     Safari
Windows Chrome
iOS     Chrome
Android Chrome
MacOS   Chrome
```

