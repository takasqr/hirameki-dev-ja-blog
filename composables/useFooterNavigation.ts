export const useFooterNavigation = () => {
  const navigations = [
  {
    name: 'サービス', items: [
      { name: 'ポモドーロ・ツリー', href: 'https://pomodorotree.com/ja' },
      { name: 'ルーレットアプリ', href: 'https://spin.randomized.app/s/ja/' },
      { name: 'ランダムアプリ', href: 'https://randomized.app/n/ja/' },
      { name: 'ヒエログリフズ', href: 'https://hieroglyphs.dev/z/ja/' },
      { name: 'ひらめき開発', href: '/https://hirameki.dev/ja/' },
      { name: 'モールスコードクラウド', href: 'https://morsecode.cloud/b/ja/' },
      { name: '正規表現チェッカー', href: 'https://regexp.app/c/ja/' },
    ],
  },
  {
    name: '開発ツール（JavaScript）', items: [
      { name: 'JapanJS', href: 'https://japanjs.org' },
      { name: 'eslint-plugin-regular-expression', href: 'https://eslint.regexp.app/ja/' },
      { name: 'hono-firebase-functions', href: 'https://github.com/takasqr/hono-firebase-functions' },
    ],
  },
  {
    name: '私について', items: [
      { name: 'プロフィール', href: 'https://hirameki.dev/ja/about/' },
      { name: 'かいがらブログ', href: 'https://kaigara.blog/p/' },
    ],
  },
  {
    name: 'ルール', items: [
      { name: 'プライバシーポリシー', href: '/ja/privacy/' },
      { name: '利用規約', href: `https://hirameki.dev/ja/terms/` },
    ],
  },
]

  return { navigations }
}
