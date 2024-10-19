---
title: sqlserverのdockerfileを作る
description: SQL Serverのdockerfileを作ります。dockerfileビルドする。SQL Serverのコンテナをビルドします。環境変数の部分は読み替えて下さい。ちなみにことの時、パスワードをちゃんと設定しないとエラーでコンテナがちゃんと起動しません。
slug: docker_dockerfile_sqlserver
category: docker
createDate: 2021/11/08
updated: 
cover: 'https://res.cloudinary.com/t8/image/upload/l_text:Sawarabi%20Gothic_100_bold:sqlserverのdockerfileを作る,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: sqlserverのdockerfileを作る
recommend: false
---
## 1. dockerfileを作る



SQL Serverのdockerfileを作ります。
```dockerfile
FROM mcr.microsoft.com/mssql/server
```

::self-introduction
::

## 2. dockerfileをビルドする
dockerfileビルドする。
```bash
docker build -t sqlserver-custom-image:0.1 .
```

* `0.1`パージョン番号
* `sqlserver-custom-image`イメージ名

## 3. 作ったイメージのコンテナを作る
SQL Serverのコンテナをビルドします。
環境変数の部分は読み替えて下さい。

```bash
docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=P@ssw0rd" -e "MSSQL_PID=Developer" \
   -p 1433:1433 \
   --name sqlserver-custom-container \
   -h sqlserver-hostname \
   -d sqlserver-custom-image:0.1
```

* `SA_PASSWORD`SQL Serverのパスワード
* `sqlserver-custom-image`先ほどビルドしたイメージを指定

ちなみにことの時、パスワードをちゃんと設定しないとエラーでコンテナがちゃんと起動しません。


> ERROR: Unable to set system administrator password: Password validation failed. The password does not meet SQL Server password policy requirements because it is not complex enough. The password must be at least 8 characters long and contain characters from three of the following four sets: Uppercase letters, Lowercase letters, Base 10 digits, and Symbols..

> エラー：システム管理者パスワードを設定できません：パスワードの検証に失敗しました。パスワードは十分に複雑ではないため、SQLServerのパスワードポリシー要件を満たしていません。パスワードは8文字以上で、大文字、小文字、10進数、記号の4つのセットのうちの3文字が含まれている必要があります。


[クイック スタート:Docker を使用して SQL Server コンテナー イメージを実行する](https://docs.microsoft.com/ja-jp/sql/linux/quickstart-install-connect-docker?view=sql-server-ver15&pivots=cs1-bash)

## 4. 作ったコンテナに接続する

```bash
docker exec -it sqlserver-custom-container bash
```

## 5. SQL Serverに接続する
```
/opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P "P@ssw0rd"
```

公式情報によると`sqlcmd`にパスは通ってないのでフルパスを指定する必要があります。

## 6. SQLを実行する

SQL Serverに接続すると、
```
mssql@sqlserver-hostname:/$ /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P "P@ssw0rd"
1> 
2> 
3> 
4> 
```

このようになるので`SQL`を書いて実行します。
`SQL`を書き終わったら、`GO`と書いてエンターを押すすると`SQL`が実行されます。

## 7. テストDBの作成

```sql
CREATE DATABASE TestDB
```

```sql
SELECT Name from sys.Databases
```

```
6> CREATE DATABASE TestDB
7> SELECT Name from sys.Databases
8> GO
Name                                                                                                                            
--------------------------------------------------------------------------------------------------------------------------------
master                                                                                                                          
tempdb                                                                                                                          
model                                                                                                                           
msdb                                                                                                                            
TestDB                                                                                                                          

(5 rows affected)
```

これは、`TestDB`というデータベースを新たに作って、データベースの一覧を表示しています。

## 8. サンプルデータ作成
```sql
CREATE TABLE Inventory (id INT, name NVARCHAR(50), quantity INT)
```


```sql
INSERT INTO Inventory VALUES (1, 'banana', 150); INSERT INTO Inventory VALUES (2, 'orange', 154);
```


```sql
SELECT * FROM Inventory WHERE quantity > 152;
```


```
1> SELECT Name from sys.Databases
2> CREATE TABLE Inventory (id INT, name NVARCHAR(50), quantity INT)
3> INSERT INTO Inventory VALUES (1, 'banana', 150); INSERT INTO Inventory VALUES (2, 'orange', 154);
4> GO
Name                                                                                                                            
--------------------------------------------------------------------------------------------------------------------------------
master                                                                                                                          
tempdb                                                                                                                          
model                                                                                                                           
msdb                                                                                                                            
TestDB                                                                                                                          

(5 rows affected)

(1 rows affected)

(1 rows affected)
1> SELECT * FROM Inventory WHERE quantity > 152;
2> GO
id          name                                               quantity   
----------- -------------------------------------------------- -----------
          2 orange                                                     154

(1 rows affected)
```

## 9. SQL Serverの接続を解除

```
QUIT
```