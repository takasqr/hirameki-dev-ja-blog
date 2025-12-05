---
title: １年間で何行コードを書いたのか
description: １年間で何行コードを書いたのか集計してみたので、やり方を紹介します。
slug: lines-of-code-2023
category: dev
createDate: 2024/02/29
updated: 
cover: '/thumbnail/ja/blog/tech/dev_learning.jpg'
alt: １年間で何行コードを書いたのか
recommend: true
homepage: true
---

## どうやって集計するのか

Git のコミットログを集計する。ソースコードは全て Git で管理しているので、コミットログを分析しやすいように変換して CSV 形式でエクスポートする。あとはエクセルなどで集計する。



## やり方

Git リポジトリのディレクトリで、コマンドを実行すると、`git_log.csv`というファイルが出力される。

```bash
git log --pretty=format:'"%H","%an","%ad","%s"' --numstat | awk '
  /^"/ {
    if (commit) print commit "," added "," deleted
    commit=$0
    added=0
    deleted=0
  }
  /^[0-9]/ {
    added+=$1
    deleted+=$2
  }
  END {
    if (commit) print commit "," added "," deleted
  }
' > git_log.csv
```

去年の私は１０万行くらいのコードを書いてました。