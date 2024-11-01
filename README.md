# Nuxt Layer

[hirameki.dev](https://hirameki.dev/ja) のブログ部分を Nuxt Layer として切り出したリポジトリです。

## 構成

- Nuxt3 Layer
- Tailwond
- Storybook

## Storybook

以下のコマンドで Storybook のビューアを起動できます。

```bash
npm run storybook
```

## 開発ガイドライン

### Git 運用

- コミットメッセージは [Conventional Commits](https://www.conventionalcommits.org/ja/v1.0.0/) に従うものとします

### 余白

余白の大きさを決めるときの判断負荷を減らすために、事前に使う余白の大きさを絞り込んでおく。

余白が大きくなるにつれて、間隔が大きくなるようにする。

本当は一般化されたフィナボッチ数列を使いたいが、Tailwindでは 4px スタートにしたときに当てはまらなかった。


### Tailwind で使う余白の大きさ

- 1
- 2
- 4
- 6
- 10
- 16
- 28
- 44
- full

__実際の`px`値__

- 4px
- 8px
- 16px
- 24px
- 40px
- 64px
- 112px
- 176px
- 100%

### z-index

z-index の設定は以下のルールで設定する。

- z-10: ホバーボタン
- z-20: 通知
- z-30: サイドメニュー、サイドーオーバー
- z-40: 画面全体を覆うオーバーレイ。ダイアログ、ローディング
- z-50: 予備