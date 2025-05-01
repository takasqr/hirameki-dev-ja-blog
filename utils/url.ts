import { siteConfig } from "../composables/config/siteConfig"

/**
 * URLをエンコードし、必要に応じてベースURLと結合する関数
 * @param url エンコードするURL（相対パスまたは絶対パス）
 * @returns エンコードされたURL
 */
export function encodeImageUrl(url?: string): string {
  if (!url) return ''

  const fullUrl = url.startsWith('http')
    ? url
    : `${siteConfig.baseUrl}${url}`

  try {
    // 一部でもエンコードされていたら fullUrl を返す
    if (isURLEncoded(fullUrl)) {
      return fullUrl
    } else {
      return encodeURI(decodeURI(fullUrl))
    }
  } catch {
    // 万が一 decodeURI でエラー（不正なパーセントエンコーディング）が出たら encodeURI のみで返す
    return encodeURI(fullUrl)
  }
}

/**
 * 与えられた文字列が URL エンコードされている可能性があるかを判定します。
 *
 * この関数は `%XX` 形式（16進数2桁）のエスケープシーケンスが含まれているかを正規表現で判定します。
 * 完全にエンコードされているかどうかを正確に判定するわけではありませんが、
 * 一部でもエンコードされている形跡があれば true を返します。
 *
 * @param {string} str - 判定対象の文字列
 * @returns {boolean} エンコードされていると推測される場合は true、そうでなければ false
 *
 * @example
 * isURLEncoded('hello%20world'); // true
 * isURLEncoded('https://example.com'); // false
 * isURLEncoded('%E3%83%86%E3%82%B9%E3%83%88'); // true
 */
function isURLEncoded(str: string): boolean {
  return /%[0-9A-Fa-f]{2}/.test(str);
}