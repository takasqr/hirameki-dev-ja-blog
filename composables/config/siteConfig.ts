/**
 * サイトの設定情報を定義する型
 * Type definition for site configuration
 */
export interface SiteConfig {
  /**
   * サイトのベースURL
   * Base URL of the site
   */
  baseUrl: string;
  
  /**
   * Twitter関連の設定
   * Twitter-related configuration
   */
  twitter: {
    /**
     * サイトのTwitterハンドル
     * Twitter handle for the site
     */
    site: string;
    
    /**
     * コンテンツ作成者のTwitterハンドル
     * Twitter handle of the content creator
     */
    creator: string;
  };
}

/**
 * サイト全体の設定を管理する設定オブジェクト
 * Site-wide configuration management object
 */
export const siteConfig: SiteConfig = {
  // サイトのベースURL / Site base URL
  baseUrl: 'https://hirameki.dev',
  
  // SNS情報 / Social media information
  twitter: {
    site: '@takasqr',
    creator: '@takasqr'
  }
}
