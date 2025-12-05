---
title: System32、SysWOW64 を使って dll を使う
description: System32、SysWOW64 を使って dll を使う方法を紹介します。dll ファイルを配置した後、必要に応じて regsvr32 を使ってレジストリに登録します。
slug: windows_system32_syswow64
category: windows
createDate: 2024/05/11
updated: 
cover: 'https://res.cloudinary.com/takasqr/image/upload/l_text:Sawarabi%20Gothic_80_bold:System32、SysWOW64 を使って dll を使う,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: System32、SysWOW64 を使って dll を使う
recommend: true
---


System32、SysWOW64 を使って dll を使う方法を紹介します。

dll ファイルを配置した後、必要に応じて regsvr32 を使ってレジストリに登録します。

[regsvr32 | Microsoft Learn](https://learn.microsoft.com/ja-jp/windows-server/administration/windows-commands/regsvr32)

## 64bit の PC で 32bit 用の dll を使う

dll ファイルを`C:¥Windows¥SysWOW64`に配置する。

## 64bit の PC で 64bit 用の dll を使う


dll ファイルを`C:¥Windows¥System32`に配置する。

## 32bit の PC で 32bit 用の dll を使う

dll ファイルを`C:¥Windows¥System32`に配置する。

