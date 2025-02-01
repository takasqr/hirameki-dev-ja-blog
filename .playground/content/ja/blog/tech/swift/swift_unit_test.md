---
title: Swift でユニットテスト
description: Swift でユニットテストのコードを書く時のコードを紹介します。以下のコードは、Bool を Int に変換する プロパティを extension に作ってテストするコードです。
slug: swift_unit_test
category: swift
createDate: 2024/05/16
updated: 
cover: 'https://res.cloudinary.com/takasqr/image/upload/l_text:Sawarabi%20Gothic_80_bold:Swift でユニットテスト,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: Swift でユニットテスト
recommend: true
---

Swift でユニットテストのコードを書く時のコードを紹介します。

以下のコードは、Bool を Int に変換する プロパティを extension に作ってテストするコードです。

__BoolExtension.swift__

```swift
import Foundation

extension Bool {

    /// Bool を Int に変換する
    var int: Int {
        
        if self == true {
            return 1
        } else {
            return 0
        }
    }
}
```

__BoolExtensionTests.swift__
```swift
import XCTest
@testable import MyApp

class BoolExtensionTests: XCTestCase {
    func testInt() {
        
        // true を int に変換した時に 1 になるか確認
        XCTAssertEqual(true.int, 1)
        // false を int に変換した時に 0 になるか確認
        XCTAssertEqual(false.int, 0)
    }
}
```


テストコードがあると安心感があるのでいいですね。

::self-introduction
::