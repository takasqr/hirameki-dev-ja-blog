---
title: 【2022年版】.gitignoreの書き方を6パターン紹介
description: gitで管理しているプロジェクトでログファイルやキャッシュに関するフォルダなど、Gitのリポジトリに含めたくないリソースがあると思います。それらは.gitignoreを設定することでgitで管理する対象から外すことができます。
slug: git_gitignore
category: git
createDate: 2021/03/01
updated: 2022/07/29
cover: 'https://res.cloudinary.com/t8/image/upload/l_text:Sawarabi%20Gothic_80_bold:.gitignoreの書き方,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: .gitignoreの書き方
recommend: false
---
## .gitignoreを使ってgitに含めないファイルを設定する



gitで管理しているプロジェクトでログファイルやキャッシュに関するフォルダなど、Gitのリポジトリに含めたくないリソースがあると思います。
それらは`.gitignore`を設定することでgitで管理する対象から外すことができます。

::self-introduction
::

## `.gitignore`の書き方

### 基本的な書き方
`.gitignore`で管理したいディレクトリの直下に`.gitignore`という名前のファイルを作ります。

例えばプロジェクト全体で設定したい場合は、ルートディレクトリ内に配置します。
`.gitignore`は複数の場所に作れます。深い階層の`.gitignore`が優先されます。

作成した`.gitignore`ファイル内に、除外したいファイル名を書いていきます。

例えばこんな感じです。

```
*.log
.cache
.DS_Store
src/.temp
node_modules
dist
.env
.env.*
```

ディレクトリ名や正規表現なんかも使えます。
以下、詳しい書き方を解説します。


### コメント
コメントは`#`で表現されます。
コメントとして書きたい文章の前に`# `を書くことでコメントとして認識されます。

```gitignore[.gitignore]
# ここにかかれた文章はコメントです。
```

### ファイル
特定のファイルを除外したい場合はファイル名を書きます。
例えば`test.md`というファイルをgitの管理から外したい場合は、以下のようにファイル名を書きます。

```gitignore[.gitignore]
test.md
```

### ディレクトリ

特定のディレクトリを除外したい場合はディレクトリのパスを書きます。
例えば`aaa`の配下にあるディレクトリを含む全てのファイルとディレクトリをgitの管理から外したい場合は`aaa/`と書きます。

`aaa/bbb/`と書くと`aaa`の中の`bbb`に入っているファイルとディレクトリを除外します。

```gitignore[.gitignore]
aaa/

aaa/bbb/
```

### 特定の拡張子

特定の拡張子のファイル全てを除外したい場合は`*.[拡張子]`の形式で書きます。

例えばマークダウンファイルを表す`.md`ファイル全てをgitで管理したくない場合は下のように書きます。

```gitignore[.gitignore]
*.md
```
### 特定のパターンを除外しない
特定のバターンを除外したくない場合は`![パターン]`の形式で書きます。

以下は、`.md`拡張子のファイルば除外するけど、`test.md`だけは除外しない`.gitignore`です。

```gitignore[.gitignore]
*.md
!test.md
```

## 注意事項
既にgitに含めてしまったファイルは後から`.gitignore`で指定して除外しようとしてもきできません。


## テンプレート
GitHub公式に各言語やIDEごとのテンプレートがあるので便利です。

[github/gitignore | GitHub](http://github.com/github/gitignore)

