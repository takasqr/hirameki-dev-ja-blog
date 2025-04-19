import { articleStructuredDataConfig } from './useArticleStructuredDataConfig'
import type { Article } from '../components/types/Article';
import { encodeImageUrl } from '../utils/url'

// --- Custom Error ---
/**
 * 記事が見つからない場合にスローされるカスタムエラー。
 * Custom error thrown when an article is not found.
 */
class ArticleNotFoundError extends Error {
  /**
   * ArticleNotFoundError のコンストラクタ。
   * Constructor for ArticleNotFoundError.
   * @param path - 記事が見つからなかったパス / The path where the article was not found.
   */
  constructor(path: string) {
    super(`記事が見つかりませんでした: ${path}`);
    this.name = 'ArticleNotFoundError';
  }
}

// --- Type Definitions ---

/**
 * 構造化データコンポーザブルの設定オプション。
 * Configuration options for the structured data composable.
 */
interface StructuredDataConfig {
  /** 著者名 / Author's name */
  authorName: string;
  /** 発行者名 / Publisher's name */
  publisherName: string;
  /** 発行者のロゴURL / Publisher's logo URL */
  publisherLogoUrl: string;
  /** サイトのベースURL / Site's base URL */
  siteUrl: string;
}

/**
 * Schema.org の Person または Organization 型を表すインターフェース。
 * Represents the structure for Schema.org Person or Organization.
 */
interface SchemaPersonOrOrganization {
  /** スキーマタイプ ('Person' または 'Organization') / Schema type ('Person' or 'Organization') */
  '@type': 'Person' | 'Organization';
  /** 名前 / Name */
  name: string;
}

/**
 * Schema.org の ImageObject 型を表すインターフェース。
 * Represents the structure for Schema.org ImageObject.
 */
interface SchemaImageObject {
  /** スキーマタイプ ('ImageObject') / Schema type ('ImageObject') */
  '@type': 'ImageObject';
  /** 画像のURL / URL of the image */
  url: string;
}

/**
 * Schema.org の WebPage 型を表すインターフェース。
 * Represents the structure for Schema.org WebPage.
 */
interface SchemaWebPage {
  /** スキーマタイプ ('WebPage') / Schema type ('WebPage') */
  '@type': 'WebPage';
  /** ページの正規URL / Canonical URL of the page */
  '@id': string;
}

/**
 * Schema.org の Article 型を表すインターフェース。
 * Represents the structure for Schema.org Article.
 * @see https://schema.org/Article
 */
interface SchemaArticle {
  /** スキーマコンテキスト (常に 'https://schema.org') / Schema context (always 'https://schema.org') */
  '@context': 'https://schema.org';
  /** スキーマタイプ ('Article') / Schema type ('Article') */
  '@type': 'Article';
  /** この記事のメインエンティティであるWebページ / The WebPage that is the main entity of this article */
  mainEntityOfPage: SchemaWebPage;
  /** 記事の見出し / Headline of the article */
  headline: string;
  /** 記事の説明 (任意だが推奨) / Description of the article (optional but recommended) */
  description?: string;
  /** 記事の画像 (URL、ImageObject、またはURL配列) / Image for the article (URL, ImageObject, or array of URLs) */
  image: string | SchemaImageObject | string[];
  /** 公開日 (ISO 8601形式) / Date of publication (ISO 8601 format) */
  datePublished?: string;
  /** 更新日 (ISO 8601形式) / Date of modification (ISO 8601 format) */
  dateModified?: string;
  /** 著者 (Person または Organization) / Author (Person or Organization) */
  author: SchemaPersonOrOrganization;
  /** 発行者 (Organization) / Publisher (Organization) */
  publisher: {
    /** スキーマタイプ ('Organization') / Schema type ('Organization') */
    '@type': 'Organization';
    /** 発行者名 / Publisher's name */
    name: string;
    /** 発行者のロゴ (ImageObject) / Publisher's logo (ImageObject) */
    logo: SchemaImageObject;
  };
}

/**
 * UTC日時文字列を、見かけ上のタイムゾーンオフセットをJST (+09:00) に変更して返す関数。
 * 注意: この関数は実際の時刻値を変更せず、UTCのままです。
 *      データベースなどにJST基準で保存されているがタイムゾーン情報がない日時を扱う場合に利用します。
 * Converts a UTC ISO 8601 datetime string to appear as JST (+09:00) by replacing 'Z'.
 * WARNING: This function does not change the actual time value, which remains UTC.
 *          Use this when handling datetime values stored based on JST but without timezone information.
 *
 * @param dateStr - 日付文字列 (Dateコンストラクタで解釈可能な形式) / Date string (parsable by Date constructor)
 * @returns JSTオフセット付きのISO 8601形式文字列 / ISO 8601 formatted string with JST offset
 */
function toJstOffsetString(dateStr: string): string {
  // Dateオブジェクトに変換し、ISO文字列を取得後、末尾の'Z'を'+09:00'に置換
  // Convert to Date object, get ISO string, then replace trailing 'Z' with '+09:00'
  return new Date(dateStr).toISOString().replace('Z', '+09:00')
}

// --- Composable Implementation ---

/**
 * 記事ページ用の構造化データ (JSON-LD) を生成し、ページの<head>に追加するコンポーザブル関数。
 * Composable function to generate structured data (JSON-LD) for an article page and add it to the page's <head>.
 *
 * @param config - 構造化データの設定 (デフォルトは共通設定を使用) / Configuration for structured data (defaults to common config)
 * @param article - 構造化データを生成する対象の記事オブジェクト / The article object to generate structured data for
 * @throws {ArticleNotFoundError} 記事オブジェクトが見つからない場合にスローされる / Thrown if the article object is not found.
 */
export const useArticleStructuredData = (
  config: StructuredDataConfig = articleStructuredDataConfig.common,
  article: Article
): void => {
  // 現在のルート情報を取得
  // Get current route information
  const route = useRoute()

  // 記事オブジェクトが存在しない場合はエラーをスロー
  // Throw an error if the article object is not provided
  if (!article) {
    throw new ArticleNotFoundError(route.fullPath)
  }

  // 画像URLをエンコード (相対パス・絶対パス対応)
  // Encode the image URL (handles relative and absolute paths)
  const imageUrl = encodeImageUrl(article.cover)

  // SchemaArticle 型に準拠したJSON-LD構造化データオブジェクトを準備
  // Prepare the JSON-LD structured data object adhering to the SchemaArticle type
  const jsonLd: SchemaArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      // ページの正規URLを生成
      // Generate the canonical URL for the page
      '@id': `${config.siteUrl}${route.path}`,
    },
    // 見出し。存在しない場合はフォールバックテキストを使用
    // Headline. Use fallback text if not present.
    headline: article.title || '記事タイトル',
    // 説明。存在しない場合は undefined を使用
    // Description. Use undefined if not present.
    description: article.description || undefined,
    // エンコードされた画像URLを使用
    // Use the encoded image URL
    image: imageUrl,
    // 公開日。存在する場合はJSTオフセット文字列に変換
    // Publication date. Convert to JST offset string if present.
    datePublished: article.createDate ? toJstOffsetString(article.createDate) : undefined,
    // 更新日。存在する場合はJSTオフセット文字列に変換
    // Modification date. Convert to JST offset string if present.
    dateModified: article.updated ? toJstOffsetString(article.updated) : undefined,
    // 著者情報
    // Author information
    author: {
      '@type': 'Person', // Personと仮定 (設定可能にすることも検討可) / Assuming Person (could be made configurable)
      name: config.authorName,
    },
    // 発行者情報
    // Publisher information
    publisher: {
      '@type': 'Organization',
      name: config.publisherName,
      logo: {
        '@type': 'ImageObject',
        url: config.publisherLogoUrl,
      },
    },
  }

  // useHead を使用してJSON-LDスクリプトを<head>に追加
  // Use useHead to add the JSON-LD script to the <head>
  useHead({
    script: [
      {
        key: 'jsonld', // スクリプトのキー (重複挿入防止) / Key for the script (prevents duplicate insertion)
        type: 'application/ld+json', // JSON-LDのMIMEタイプ / MIME type for JSON-LD
        // JSON-LDオブジェクトを整形して文字列化 / Stringify the JSON-LD object with formatting
        children: JSON.stringify(jsonLd, null, 2),
      },
    ],
  })
}
