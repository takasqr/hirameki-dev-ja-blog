/**
 * ページのヘッド情報を表す型定義
 */
export type HeadParams = {
  /** 
   * ページのタイトル。undefined の場合はエラーとなるため、undefined チェックが必要
   */
  title: string | undefined
  
  /** 
   * ページの説明。meta タグの description に使用
   */
  description: string
  
  /** 
   * OGP画像やサムネイル画像の URL
   */
  cover: string
  
  /** 
   * ページの URL パス。OGP や canonical リンクに使用
   */
  path: string

  /**
   * このページを noindex にするかどうか（省略時は index 扱い）
   */
  noindex?: boolean
};