# CLAUDE.md

このファイルは Claude Code (claude.ai/code) がこのリポジトリで作業する際のガイダンスを提供します。

## プロジェクト概要

これは **hirameki-dev-ja-blog** で、Nuxt 3 Layer として構築された日本語技術ブログです。他の Nuxt アプリケーションから拡張可能な再利用可能なレイヤーとして設計されています。

## 開発コマンド

**メイン開発:**
- `npm run dev` - 開発サーバー起動（.playground 環境を実行）
- `npm run dev:prepare` - Nuxt 開発環境の準備

**コンポーネント開発:**
- `npm run storybook` - Storybook を起動（コンポーネントの独立開発用）
- `npm run build-storybook` - Storybook の本番ビルド

**テスト:**
- `npm run test:unit` - Vitest でユニットテスト実行
- `npm run test:e2e` - Playwright でE2Eテスト実行
- `npm run typecheck` - TypeScript 型チェック実行

**コード品質:**
- `npm run lint` - ESLint 実行（コミット前必須）

**ビルド:**
- `npm run build` - 本番用ビルド
- `npm run generate` - 静的サイト生成

## アーキテクチャ

### Nuxt Layer 構造
- **ルートディレクトリ**: 再利用可能なレイヤーのコンポーネント、composables、設定を含む
- **`.playground/`**: メインレイヤーを拡張するテスト用開発環境
- 開発ワークフロー: ルートで機能を構築し、`.playground` でテスト

### コンポーネント構成
- **`components/basic/`**: 50+ の基本UIコンポーネント（Button、Card、Dialog等）
- **`components/content/`**: ブログ固有のコンポーネント（ArticleList、CategoryView等）
- **`components/custom/`**: ビジネスロジックコンポーネント（ProfileCard、CategoryList等）
- **`components/template/`**: 再利用可能なテンプレートコンポーネント

各コンポーネントは通常以下を含みます:
- Vue SFC ファイル
- Storybook ストーリー（`.stories.ts`）
- 該当する場合はユニットテスト

### コンテンツ管理
- **ブログコンテンツ**: `content/p/` 内のmarkdownファイル
- **構造**: 技術記事用の `tech/`、日記エントリー用の `journal/`
- **メタデータ**: 記事設定にfrontmatterを使用
- `@nuxt/content` モジュールで管理

### スタイリングシステム
- **Tailwind CSS** とカスタムデザインシステム
- **スペーシングスケール**: 事前定義されたスケール（1,2,4,6,10,16,28,44,full）を使用
- **Z-index システム**: 構造化されたレイヤー（z-10 〜 z-50）
- **Border radius**: 主に `rounded-xl` を使用
- **ダークモード**: `class` ストラテジーで設定

### テスト戦略
- **ユニットテスト**: `test/unit/` と `utils/` をターゲットにしたVitest設定
- **E2Eテスト**: `/p/` ルートに焦点を当てたPlaywright
- **コンポーネントテスト**: Vue Test Utils統合

## 主要設定

### TypeScript
- ES モジュールでストリクトモード有効
- カスタムパスエイリアス設定
- `components/types/` にコンポーネント型定義

### Git ワークフロー
- Conventional Commits 標準を使用
- コミット前には必ず `npm run lint` と `npm run typecheck` を実行

### 開発メモ
- プロジェクトはプレイグラウンド設定を使用 - `npm run dev` は `.playground` 環境を実行
- レイヤー開発では、ルートディレクトリで作業し `.playground` でテスト
- コンポーネントは既存コンポーネントの確立されたパターンに従う
- 日本語コンテンツ構造は技術ブログ向けに最適化

## 一般的なタスク

### タスクファイルの管理

`docs/tasks/`ディレクトリには、Claude Codeへのタスク指示ファイルが格納されています。

#### タスクファイルの形式

```yaml
---
date: YYYY/MM/DD
completed: false 
---

タスクの内容をここに記載
```

#### タスクファイルの追加方法

1. `docs/tasks/YYYY/MM/DD/`ディレクトリに新しいMarkdownファイルを作成
   - ディレクトリ構造：`docs/tasks/YYYY/MM/DD/`（例：`docs/tasks/2025/06/23/`）
   - ファイル名形式：`YYYYMMDDHHMM.md`（例：`202506230003.md`）
   - 完全パス例：`docs/tasks/2025/06/23/202506230003.md`
2. ファイルの先頭にフロントマターを追加：
   - `date`：タスク作成日（YYYY/MM/DD形式）
   - `completed`：タスク完了状態（初期値は`false`）
3. フロントマターの後にタスクの詳細な内容を記載
4. タスクが完了したら、フロントマターの`completed`を`true`に変更

#### タスクファイルの実行

Claude Codeに対して「`docs/tasks/YYYY/MM/DD/YYYYMMDDHHMM.md`を実行して下さい」と指示することで、タスクを実行できます。

#### タスクファイルの完了時の記録

タスクが完了して`completed`を`true`に変更する際は、ファイルの最後に実行結果を記載してください：

```markdown
## 実行結果

- 実行した内容の概要
- 変更されたファイル
- その他重要な情報
```