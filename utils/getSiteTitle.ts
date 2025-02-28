export function getSiteTitle(path: string): string {
  if (path.includes('/ja/blog')) {
    return 'かいがらブログ'
  }
  else {
    return 'ひらめき開発'
  }
}
