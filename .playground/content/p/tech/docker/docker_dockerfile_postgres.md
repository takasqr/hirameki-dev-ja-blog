---
title: Postgres SQLのdockerfileを作る
description: Postgres SQLのdockerfileを作る方法を紹介します。SQL Serverのdockerfileを作ります。dockerfileビルドする。Postgres SQLのコンテナをビルドします。環境変数の部分は読み替えて下さい。
slug: docker_dockerfile_postgres
category: docker
createDate: 2021/11/08
updated: 
cover: 'https://res.cloudinary.com/takasqr/image/upload/l_text:Sawarabi%20Gothic_100_bold:Postgres SQLのdockerfileを作る,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: Postgres SQLのdockerfileを作る
recommend: false
---
## 1. dockerfileを作る
Postgres SQLのdockerfileを作る方法を紹介します。


SQL Serverのdockerfileを作ります。
```dockerfile
FROM postgres
```



## 2. dockerfileをビルドする
dockerfileビルドする。
```bash
docker build -t postgres-custom-image:0.1 .
```

* `0.1`パージョン番号
* `postgres-custom-image`イメージ名

## 3. 作ったイメージのコンテナを作る
Postgres SQLのコンテナをビルドします。
環境変数の部分は読み替えて下さい。

```bash
docker run -e "POSTGRES_PASSWORD=P@ssw0rd" -e "POSTGRES_USER=postgres" -e "POSTGRES_DB=testdb" \
   --name postgres-custom-container \
   -p 5432:5432 \
   -d postgres-custom-image:0.1
```

* `POSTGRES_PASSWORD`SQL Serverのパスワード
* `postgres-custom-image`先ほどビルドしたイメージを指定


## 4. 作ったコンテナに接続する

```bash
docker exec -it postgres-custom-container bash
```


## 5. postgresに接続する

```
su postgres
```

```
psql testdb
```

postgresに接続できました。
```
psql (14.0 (Debian 14.0-1.pgdg110+1))
Type "help" for help.

testdb=# 
testdb=# 
```

## 6. テーブル作成

```sql
CREATE TABLE Inventory (id INT, name VARCHAR(50), quantity INT)
```
```
testdb=# CREATE TABLE Inventory (id INT, name VARCHAR(50), quantity INT)
;
CREATE TABLE
```

## 7. サンプルデータINSERT
```sql
INSERT INTO Inventory VALUES (1, 'banana', 150); INSERT INTO Inventory VALUES (2, 'orange', 154);
```

```
testdb=# INSERT INTO Inventory VALUES (1, 'banana', 150); INSERT INTO Inventory VALUES (2, 'orange', 154);
INSERT 0 1
```

## 8. サンプルデータSELECT
```sql
SELECT * FROM Inventory WHERE quantity > 152;
```


```
testdb=# SELECT * FROM Inventory WHERE quantity > 152;
 id |  name  | quantity 
----+--------+----------
  2 | orange |      154
(1 row)

```
## 8. postgres接続解除
```
exit
```