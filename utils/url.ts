import { siteConfig } from "../composables/config/siteConfig"

/**
 * URLをエンコードし、必要に応じてベースURLと結合する関数
 * 既に一部エンコードされていても再エンコードされません。
 * @param url エンコードするURL（相対パスまたは絶対パス）
 * @returns エンコードされたURL
 */
export function encodeImageUrl(url?: string): string {
  if (!url) return ''

  const fullUrl = url.startsWith('http')
    ? url
    : `${siteConfig.baseUrl}${url}`

  try {
    return encodeURI(decodeURI(fullUrl))
  } catch {
    // 万が一 decodeURI でエラー（不正なパーセントエンコーディング）が出たら encodeURI のみで返す
    return encodeURI(fullUrl)
  }
}