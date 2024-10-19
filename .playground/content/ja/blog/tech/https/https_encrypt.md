---
title: https の headers などの情報はどこまで暗号化されるのか？
description: 
slug: https_encrypt
category: https
createDate: 2024/05/17
updated: 
cover: 'https://res.cloudinary.com/t8/image/upload/l_text:Sawarabi%20Gothic_80_bold:https の headers などの情報はどこまで暗号化されるのか？,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: https の headers などの情報はどこまで暗号化されるのか？
recommend: true
homepage: true
---



https の headers は暗号化される。

- URL
- query parameters
- cookies

も暗号化される。

ただし、IPアドレス、ドメイン名は暗号化されない。


> Because HTTPS piggybacks HTTP entirely on top of TLS, the entirety of the underlying HTTP protocol can be encrypted. This includes the request's [URL](https://en.wikipedia.org/wiki/URL "URL"), query parameters, headers, and cookies (which often contain identifying information about the user). However, because website addresses and [port](https://en.wikipedia.org/wiki/Port_\(computer_networking\) "Port (computer networking)") numbers are necessarily part of the underlying [TCP/IP](https://en.wikipedia.org/wiki/TCP/IP "TCP/IP") protocols, HTTPS cannot protect their disclosure. In practice this means that even on a correctly configured web server, eavesdroppers can infer the IP address and port number of the web server, and sometimes even the domain name (e.g. www\.example.org, but not the rest of the URL) that a user is communicating with, along with the amount of data transferred and the duration of the communication, though not the content of the communication.[\[4\]](https://en.wikipedia.org/wiki/HTTPS#cite_note-httpse-4)

[HTTPS - Wikipedia](https://en.wikipedia.org/wiki/HTTPS)


情報源が Wikipedia だけでは少し不安なので、アメリカの情報系機関のサイトでも同じように記載されているのを確認しました。

[The HTTPS-Only Standard - Introduction to HTTPS](https://https.cio.gov/faq/)

クエリパラメータも暗号化されるが、ブラウザで複合化された後にトラッキングツールなどに送信される可能性があるので機密情報では使用しない方が無難。

::self-introduction
::