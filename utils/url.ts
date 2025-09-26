import { siteConfig } from "../composables/config/siteConfig"

/** エンコード処理から除外するホストの許可リスト */
const ENCODE_EXCLUDE_HOSTS: (string | RegExp)[] = [
  // 例: 完全一致
  'asset.hirameki.dev',
  // 例: サブドメイン含めたワイルドカード相当（正規表現）
  // /\.cloudinary\.com$/i,
  // 例: Googleの画像系CDN
  // /\.googleusercontent\.com$/i,
]

/** ホスト名が許可リストに一致するか */
function isAllowedHost(hostname: string): boolean {
  return ENCODE_EXCLUDE_HOSTS.some((rule) =>
    typeof rule === 'string' ? hostname === rule : rule.test(hostname),
  )
}

/** //example.com 形式（プロトコル相対）に http(s) を仮置きする */
function withScheme(u: string, scheme = 'https:'): string {
  return u.startsWith('//') ? `${scheme}${u}` : u
}

/**
 * URL を正規化して返す。
 * - 相対URLは baseUrl と結合
 * - ホワイトリストのホストは **一切加工せず** そのまま返す
 * - それ以外は decode → encode（壊れた%は catch で encode のみ）
 */
export function encodeImageUrl(input?: string): string {
  if (!input) return ''

  // data:, blob:, file: などは触らない（URLオブジェクトに通さない）
  if (/^(data|blob|file):/i.test(input)) return input

  // 相対・プロトコル相対対応
  const raw = input.startsWith('http') || input.startsWith('//')
    ? withScheme(input)
    : `${siteConfig.baseUrl}${input}`

  let u: URL
  try {
    u = new URL(raw)
  } catch {
    // 万一パース不可なら最後の防御
    try { return encodeURI(raw) } catch { return raw }
  }

  // ✅ ホワイトリスト一致はそのまま返す（再エンコードしない）
  if (isAllowedHost(u.hostname)) {
    // プロトコル相対で来た場合 toString() で https が付くのが嫌なら raw を返す
    // ここでは元文字列を保持
    return input.startsWith('//') ? input : u.toString()
  }

  // ここからは通常ドメイン：安全に正規化
  try {
    return encodeURI(decodeURI(u.toString()))
  } catch {
    return encodeURI(u.toString())
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