---
title: SwiftUI バックグラウンドで View 関連を操作する
description: 
slug: swift_swiftui_manage_view_in_background
category: swift
createDate: 2024/05/13
updated: 
cover: 'https://res.cloudinary.com/takasqr/image/upload/l_text:Sawarabi%20Gothic_80_bold:SwiftUI バックグラウンドで View 関連を操作する,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: SwiftUI バックグラウンドで View 関連を操作する
recommend: true
---

SwiftUI でアプリを作っていて、バックグラウンドの処理が終わった時などに View 側の見た目を変更したい時があると思います。

その時にバックグラウンドから直接変更すると警告が出ます。

```
Publishing changes from background threads is not allowed; make sure to publish values from the main thread (via operators like receive(on:)) on model updates.
```

その時は以下のようにメインスレッドから View を変更します。

```swift
DispatchQueue.main.async {
    // View 関連の操作                                
}
```


