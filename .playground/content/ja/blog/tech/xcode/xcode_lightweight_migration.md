---
title: CoreData でライトウェイトマイグレーション【Lightweight migration】
description: ライトウェイトマイグレーションは、attribute の追加、削除などを自動的に検知して CoreData をマイグレーションしてくれる機能です。すでにアプリをインストールした状態でカラムを追加したバージョンをアップデートするとアプリ起動時にクラッシュする。アプリがクラッシュしないように CoreData をマイグレーションする必要がある。
slug: xcode_lightweight_migration
category: xcode
createDate: 2024/04/20
updated: 
cover: 'https://res.cloudinary.com/takasqr/image/upload/l_text:Sawarabi%20Gothic_80_bold:CoreData でライトウェイトマイグレーション,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: CoreData でライトウェイトマイグレーション【Lightweight migration】
recommend: true
---

すでにアプリをインストールした状態でカラムを追加したバージョンをアップデートするとアプリ起動時にクラッシュする。

アプリがクラッシュしないように CoreData をマイグレーションする必要がある。

ライトウェイトマイグレーションは、attribute の追加、削除などを自動的に検知して CoreData をマイグレーションしてくれる機能です。



## やり方

### Swift コード追加

詳しくは下のリンクを参照してください。

```swift
container.persistentStoreDescriptions.forEach { description in
    description.setOption(true as NSNumber, forKey: NSMigratePersistentStoresAutomaticallyOption)
    description.setOption(true as NSNumber, forKey: NSInferMappingModelAutomaticallyOption)
}
```

### Xcode で作業

1. xcdatamodeld ファイルを選択した状態で、`Editor`、`Add Model Version...`と進む
2. 新しいモデルバージョンを作る`AppName 2`のような感じ
3. `AppName 2`を選択して、インスペクターエリアに表示されている`Model Version`の`Current`を新しく作ったモデルバージョンにする
4. `AppName 2`でカラム追加、モデル追加を行う

## 参考

[Migrating your data model automatically | Apple Developer Documentation](https://developer.apple.com/documentation/coredata/migrating_your_data_model_automatically)
