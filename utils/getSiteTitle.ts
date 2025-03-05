export function getSiteTitle(path: string): string {
  if (path.includes('/ja/blog')) {
    return 'かいがらブログ'
  }
  else if (path.includes('/en/')) {
    return 'hirameki.dev'
  }
  else {
    return 'ひらめき開発'
  }
}
