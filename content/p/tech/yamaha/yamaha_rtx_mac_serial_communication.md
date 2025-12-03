---
title: Yamaha ルーターに Mac からシリアル接続する
description: Mac から Yamaha ルーターにシリアル接続する方法です。大きく、２つの手順で接続します。1. デバイス名を確認する 2. screen コマンドで接続する
slug: yamaha_rtx_mac_serial_communication.md
category: yamaha
createDate: 2024/04/05
updated: 
cover: 'https://res.cloudinary.com/takasqr/image/upload/l_text:Sawarabi%20Gothic_80_bold:YamahaルーターにMacからシリアル接続する,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: Yamaha ルーターに Mac からシリアル接続する
recommend: true
homepage: true
---

## Mac から Yamaha ルーターに接続

Mac から Yamaha ルーターにシリアル接続する方法です。

大きく、２つの手順で接続します。

1. デバイス名を確認する
2. screen コマンドで接続する

### デバイス名を確認する

まずはデバイス名を確認する。

```
ls /dev/tty.*
```


```
/dev/tty.Bluetooth-Incoming-Port	/dev/tty.usbserial-AI04XXXX
```

のような感じで出てくる。`/dev/tty.usbserial-AI04XXXX`のようなやつがシリアルケーブル。物理的に USBケーブルを抜いたりしながらデバイスを特定する。

### screen コマンドで接続する

screen コマンドを使って接続する。

```
screen /dev/tty.usbserial-AI04XXXX
```

## 文字化け問題

screen コマンドで接続すると日本語が文字化けしていた。

ルーターと Mac の文字コードが合ってないのが原因。


Yamaha ルーターのデフォルトの文字コードがシフトJIS なのが原因。

Yamaha ルーターの文字コードを Mac と同じ UTF-8 にすることで文字化けが解消されました。

```
console character ja.utf8
```


[# 4.20 コンソールの言語とコードの設定 | 機器の設定](https://www.rtpro.yamaha.co.jp/RT/manual/rt-common/setup/console_character.html)
