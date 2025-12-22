# アーキテクチャ概要

## プロジェクト概要

**hirameki-dev-ja-blog** は、Nuxt 3 Layer として構築された日本語技術ブログプラットフォームです。他の Nuxt アプリケーションから拡張可能な再利用可能なレイヤーとして設計されており、スケーラブルでモジュラーなアーキテクチャを採用しています。

## アーキテクチャパターン

### Nuxt Layer アーキテクチャ

```
hirameki-dev-ja-blog/
├── 📁 components/       # 再利用可能なUIコンポーネント
├── 📁 composables/      # ビジネスロジックとステート管理
├── 📁 content/          # Markdown記事とコンテンツ
├── 📁 layouts/          # ページテンプレート
├── 📁 pages/            # ルーティングとページ構成
├── 📁 utils/            # ユーティリティ関数
├── 📁 types/            # TypeScript型定義
├── 📁 .playground/      # 開発・テスト環境
└── 📄 nuxt.config.ts    # メインレイヤー設定
```

#### レイヤー構成の利点
- **再利用性**: 他のNuxtプロジェクトでの拡張可能
- **分離**: ビジネスロジックとプレゼンテーション層の明確な分離
- **テスト性**: `.playground` 環境での独立したテスト
- **拡張性**: 段階的な機能追加が容易

## コンポーネントアーキテクチャ

### 階層構造

```
components/
├── basic/          # 基本UIコンポーネント (50+)
│   ├── button/     # Button, ButtonSize
│   ├── card/       # Card
│   ├── dialog/     # Dialog, DialogStore
│   └── ...
├── content/        # ブログ固有コンポーネント
│   ├── article-list/
│   ├── category-page-view/
│   └── ...
├── custom/         # ビジネスロジックコンポーネント
│   ├── category-list/
│   ├── my-profile-card/
│   └── ...
├── template/       # 再利用可能テンプレート
│   ├── primary-button/
│   ├── theme-button/
│   └── ...
└── icon/           # アイコンコンポーネント
    ├── basic/
    ├── category/
    └── ...
```

### コンポーネント設計原則

1. **単一責任原則**: 各コンポーネントは明確な役割を持つ
2. **Composition API**: Vue 3のComposition APIを活用
3. **TypeScript**: 型安全性の確保
4. **Storybook**: コンポーネントの独立開発とドキュメント化
5. **テスト**: Vitest + Vue Test Utilsによるユニットテスト

## コンテンツ管理システム

### @nuxt/content 統合

```
content/ja/blog/
├── tech/           # 技術記事
│   ├── nuxtjs/
│   ├── vuejs/
│   ├── firebase/
│   └── ...
└── journal/        # 日記・エッセイ
    ├── 2021/
    ├── 2022/
    └── ...
```

#### 特徴
- **Markdown**: Frontmatterメタデータサポート
- **シンタックスハイライト**: 30+言語対応
- **SEO**: 構造化データとメタタグ自動生成
- **カテゴリ・タグ**: 動的分類システム

## ステート管理

### Pinia Integration

```typescript
// stores/
├── banner/        # バナー表示管理
├── dialog/        # モーダル管理
├── loading/       # ローディング状態
├── notification/  # 通知システム
├── popup/         # ポップアップ管理
└── theme/         # テーマ切り替え
```

#### 設計方針
- **モジュラー**: 機能別ストア分離
- **リアクティブ**: Vue 3リアクティビティシステム活用
- **TypeScript**: 型安全なステート管理

## スタイリングシステム

### Tailwind CSS + Design System

```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: { light, DEFAULT, dark },
      secondary: { light, DEFAULT, dark },
      // Material Design 3 準拠カラーパレット
    },
    spacing: [1, 2, 4, 6, 10, 16, 28, 44, 'full'],
    borderRadius: { xl: '12px' }, // 主要ボーダー半径
  }
}
```

#### 特徴
- **Material Design 3**: モダンなデザインシステム
- **ダークモード**: クラス戦略による完全対応
- **レスポンシブ**: モバイルファーストアプローチ
- **アクセシビリティ**: WCAG 2.1 準拠

## テスト戦略

### 多層テストアプローチ

```
test/
├── unit/              # ユニットテスト
│   ├── components/    # コンポーネントテスト
│   └── utils/         # ユーティリティテスト
├── e2e/               # E2Eテスト
│   └── ja/blog/       # ブログ機能テスト
└── Test.test.ts       # 統合テスト
```

#### テストツール
- **Vitest**: 高速ユニットテスト
- **Playwright**: クロスブラウザE2Eテスト
- **Vue Test Utils**: Vueコンポーネントテスト
- **Happy DOM**: 軽量DOMシミュレーション

## パフォーマンス最適化

### ビルド最適化

1. **コード分割**: 動的インポートによる最適化
2. **Tree Shaking**: 未使用コードの除去
3. **アセット最適化**: 画像・フォントの最適化
4. **CDN活用**: Cloudinaryによる画像配信

### ランタイム最適化

1. **SSG**: 静的サイト生成による高速化
2. **プリフェッチ**: 必要なページの事前読み込み
3. **キャッシュ戦略**: 適切なキャッシュヘッダー設定
4. **コンポーネント最適化**: 効率的な再レンダリング

## 開発ワークフロー

### 開発環境

```bash
# レイヤー開発
npm run dev          # .playground環境での開発

# コンポーネント開発  
npm run storybook    # Storybook UI開発

# テスト実行
npm run test:unit    # ユニットテスト
npm run test:e2e     # E2Eテスト
npm run typecheck    # 型チェック
npm run lint         # コード品質チェック
```

### CI/CD パイプライン

1. **品質チェック**: ESLint + TypeScript型チェック
2. **テスト実行**: 全レベルテストスイート
3. **ビルド検証**: 本番ビルド成功確認
4. **デプロイ**: 静的サイト生成・配信

## セキュリティ

### セキュリティ対策

1. **XSS防止**: Vue.jsの自動エスケープ
2. **CSRF対策**: トークンベース認証
3. **コンテンツセキュリティ**: CSPヘッダー設定
4. **入力検証**: フォーム入力の厳格な検証

## 拡張性

### 今後の拡張計画

1. **多言語対応**: i18n統合
2. **検索機能**: 全文検索システム
3. **コメント機能**: ユーザーエンゲージメント
4. **管理画面**: コンテンツ管理システム

---

このアーキテクチャは、スケーラビリティ、保守性、開発者体験を重視して設計されており、継続的な改善と拡張が可能な構造となっています。