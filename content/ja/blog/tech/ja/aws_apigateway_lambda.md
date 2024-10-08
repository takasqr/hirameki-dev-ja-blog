---
title: AWS API Gateway と Lambda で Web API を作る
description: AWS の API Gateway と Lambda で Web API を作る方法を紹介します。
slug: aws_apigateway_lambda
category: aws
createDate: 2024/02/24
updated: 
cover: '/thumbnail/aws_apigateway_lambda.jpg'
alt: AWS API Gateway と Lambda で Web API を作る
recommend: true
---

個人開発で AWS のサービスを使って、Web API を作りました。構成を紹介します。

::self-introduction
::

## 技術構成

- API Gateway
- Lambda
- VPC
- Cloud Watch
- Lightsail(SQL Server)

## 構成図

構成図を作りました。

![Web API 構成図](/img/aws_apigateway_lambda/architecture.png)

## 各サービスについて

### API Gateway

API のエンドポイントです。カスタムドメインを当てて、REST API で作成しました。キーと IAM で認証することによって二重のセキュリティをかけています。

Lambda にリクエストを流しています。

### Lambda

REST のリソースごとに Lambda のプロジェクトを作っています。API Gateway のリクエストを解析して、DB への処理を実行してレスポンスを返しています。

VPC を介して Laightsail にインストールした SQL Server にアクセスすることで、経路のセキュリティを高めています。以前は、Lambda を VPC に繋ぐのはアンチパターンでしたが、今は問題なく繋げることができます。

### VPC

Lambda、Lightsail を繋いでいます。VPC の中には何もリソースがないのは少し歪な感じがしますが、VPC を通して通信することで経路のセキュリティを高めています。

### Cloud Watch

API Gateway、Lambda のログを取得しています。エラーが発生すると、メールが飛ぶように設定しています。

### Lightsail(SQL Server)

本来であれば、RDS を使うべきですが、個人開発で使うには RDS は高いので、Lightsail に SQL Server をインストールしています。この構成だとアクセスが増加した時にパフォーマンスの問題がありますが、そんなにアクセスもないのでこの構成でいくことにしました。

## トラブルシューティング

### Lambda メモリがなくなった


エラーが発生。

`Error: Runtime exited with error: exit status 129`
`Connection lost - socket hang up`

などと出ていた。

`REPORT RequestId: 57a96421-8eaf-424a-a594-86c486e24bc6	Duration: 748.38 ms	Billed Duration: 749 ms	Memory Size: 128 MB	Max Memory Used: 127 MB	`

メモリがなくなったよう。

Lambda の設定画面からメモリを変更することで解決。