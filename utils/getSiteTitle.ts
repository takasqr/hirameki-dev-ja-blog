export function getSiteTitle(path: string): string {
  if (path.includes('/ja/blog') || path.startsWith('/p/')) {
    return 'かいがらブログ'
  }
  else if (path.startsWith('/n/ja/')) {
    return 'ランダムツール'
  }
  else if (path.startsWith('/n/')) {
    return 'randomized.app'
  }
  else if (path.startsWith('/z/ja/')) {
    return 'ヒエログリフ'
  }
  else if (path.startsWith('/z/')) {
    return 'hieroglyph.dev'
  }
  else if (path.startsWith('/c/ja/')) {
    return '正規表現ツール'
  }
  else if (path.startsWith('/c/')) {
    return 'regexp.app'
  }
  else if (path.startsWith('/b/ja/')) {
    return 'モールスコードクラウド'
  }
  else if (path.startsWith('/b/')) {
    return 'morsecode.cloud'
  }
  else if (path.startsWith('/v/ja/')) {
    return 'ライブプラス'
  }
  else if (path.startsWith('/v/')) {
    return 'LIVE STREAM PLUS'
  }
  else if (path.startsWith('/s/ja/')) {
    return 'ルーレットアプリ'
  }
  else if (path.startsWith('/s/')) {
    return 'Spin The Wheel'
  }
  else if (path.includes('/en/')) {
    return 'hirameki.dev'
  }
  else if (path.includes('/e/ja/')) {
    return '画像ツール by hirameki.dev'
  }
  else {
    return 'もじツール by hirameki.dev'
  }
}
