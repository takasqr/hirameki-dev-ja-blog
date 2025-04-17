import { siteConfig } from "../composables/config/siteConfig"

/**
 * URLをエンコードし、必要に応じてベースURLと結合する関数
 * @param url エンコードするURL（相対パスまたは絶対パス）
 * @returns エンコードされたURL
 */
export function encodeImageUrl(url: string): string {
  // 相対パスの場合、ベースURLと結合
  const fullUrl = url.startsWith('http') 
    ? url 
    : `${siteConfig.baseUrl}${url || '/'}`
  
  // URLエンコード
  return encodeURI(fullUrl)
}
