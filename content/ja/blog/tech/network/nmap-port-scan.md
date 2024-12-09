---
title: Nmap のポートスキャンでサーバー、ルーターのセキュリティをチェックする
description: マトリックスのトリニティが使っていたツールでおなじみ Nmap の使い方を紹介します。Nmap を使えば、ネットワーク機器のポートの状況を調べることができます。ルーターやサーバーのセキュリティチェックなどに使えます。今回は自分で運用している Web サーバーの443ポートの状況をチェックしてみました。
slug: nmap-port-scan
category: network
createDate: 2024/12/09
updated: 
cover: 'https://res.cloudinary.com/t8/image/upload/l_text:Sawarabi%20Gothic_100_bold:Nmap のポートスキャンでサーバー、ルーターのセキュリティをチェックする,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
homepage: true
---

## はじめに

マトリックスのトリニティが使っていたツールでおなじみ Nmap の使い方を紹介します。

Nmap を使えば、ネットワーク機器のポートの状況を調べることができます。ルーターやサーバーのセキュリティチェックなどに使えます。

今回は自分で運用している Web サーバーの443ポートの状況をチェックしてみました。

このポートの状況を調べることをポートスキャンと言います。

[Movies Featuring the Nmap Security Scanner](https://nmap.org/movies/)

## Nmap を Mac にインストール(Homebrew)

私は Mac でかつ Homebrew を使っているので、以下のコマンドで Nmap をインストールします。

```bash
brew install nmap
```


その他の人は[公式サイトのダウンロードページ](https://nmap.org/download.html)でインストール方法を確認して下さい。


[Download the Free Nmap Security Scanner for Linux/Mac/Windows](https://nmap.org/download.html)

## ポートスキャンコマンド

基本的なポートスキャンのコマンドです。

```bash
nmap -T4 -p 1-65535 [スキャンしたい IP アドレスやホスト名]
```

- `-T4`: 0-5 の値でポートをスキャンしていく速さを指定する。5が一番早いがネットワーク、サーバーに負荷がかかる
- `-p`: スキャンするポートの範囲を指定する。`1-65535`だと1から65535番ポートまでスキャンする。`443`のように1つのポートを指定することもできる

ちなみに0番のポートを含める場合は、`0-65535`とします。0番のポートはエニーポートと呼ばれている特殊なポートです。

> 0番のポートはエニーポート（any port）と呼ばれ、アプリケーションに対して、動的に別番号の空きポートを割り当てるために用意された特殊なポート番号である。


[TCPやUDPにおけるポート番号の一覧 - Wikipedia](https://ja.wikipedia.org/wiki/TCPやUDPにおけるポート番号の一覧)


スキャンの速さについては、Nmap 公式サイトでは`-T4`がおすすめされていた。

[タイミングとパフォーマンス | Nmap リファレンスガイド \(Man Page\)](https://nmap.org/man/ja/man-performance.html)

## 試してみる

今回は私が運用しているこのサイトの443番ポートをスキャンしてみます。443番ポートは HTTPS のポートで Web サーバーであれば必ず開かれている必要があります。


```bash
nmap -T4 -p 443 hirameki.dev
```

以下のような結果が返ってきました。

```
PORT    STATE SERVICE
443/tcp open  https
```


## 結果の読み方

以下がポートのステータスのリストです。公式サイトより引用しました。

| ステータス | 状態 |
|---|---|
| open | アプリケーションがTCPコネクションやUDPパケットをアクティブに受け入れている |
| closed | アクセス可能だが、そこで受信待機しているアプリケーションはない。 |
| filtered | ポートが開いているかどうかを判別できない。なぜなら、パケットフィルタのせいで、プローブがポートまで到達できないからである。 |
| unfiltered | ポートにはアクセス可能だが、そのポートが開いているか閉じているかをNmapでは判別できないことを意味する。 |
| open\|filtered | 対象のポートが開いているかフィルタ処理されているかを判別できない場合である。 |
| closed\|filtered | ポートが閉じているかフィルタ処理されているかを、Nmapが判断できない場合に用いられる。 |

先ほどのスキャンした結果に`443/tcp open`とあったので、正常にポートが開かれていることがわかります。

まぁ、`443`番ポートが開かれてないとこのページを開けないですしね。

[ポートスキャンの基本 | Nmap リファレンスガイド \(Man Page\)](https://nmap.org/man/ja/man-port-scanning-basics.html)

## さいごに


Nmap を使えば非常に簡単にポートの状況を確認できます。試してみて下さい。

