export const useFooterNavigation = () => {
  const navigations = [
  {
    name: 'Web サービス', items: [
      { name: 'HIRAMEKI.DEV', href: 'https://hirameki.dev/ja/' },
      { name: 'ポモドーロ・ツリー', href: 'https://pomodorotree.com/ja' },
    ],
  },
    {
    name: 'iOS アプリ', items: [
      { name: 'ポモドーロ・ツリー', href: 'https://apps.apple.com/jp/app/%E3%83%9D%E3%83%A2%E3%83%89%E3%83%BC%E3%83%AD-%E3%83%84%E3%83%AA%E3%83%BC/id6738609324' },
      { name: 'ランダムルーレット', href: 'https://apps.apple.com/jp/app/%E3%83%A9%E3%83%B3%E3%83%80%E3%83%A0%E3%83%AB%E3%83%BC%E3%83%AC%E3%83%83%E3%83%88/id6535648012' },
      { name: 'フォントチェッカー', href: 'https://apps.apple.com/jp/app/%E3%83%95%E3%82%A9%E3%83%B3%E3%83%88%E3%83%81%E3%82%A7%E3%83%83%E3%82%AB%E3%83%BC/id6544782699' },
      { name: 'モールス信号変換ツール', href: 'https://apps.apple.com/jp/app/%E3%83%A2%E3%83%BC%E3%83%AB%E3%82%B9%E4%BF%A1%E5%8F%B7%E5%A4%89%E6%8F%9B%E3%83%84%E3%83%BC%E3%83%AB/id6544782641' },
      { name: 'いいねフォント', href: 'https://apps.apple.com/jp/app/sns%E3%83%95%E3%82%A9%E3%83%B3%E3%83%88-%E3%81%84%E3%81%84%E3%81%AD%E3%83%95%E3%82%A9%E3%83%B3%E3%83%88/id6544788448' },
      { name: '添加物スキャナー', href: 'https://apps.apple.com/jp/app/%E6%B7%BB%E5%8A%A0%E7%89%A9%E3%82%B9%E3%82%AD%E3%83%A3%E3%83%8A%E3%83%BC/id6469045264' },
    ],
  },
    {
    name: 'Android アプリ', items: [
      { name: 'ポモドーロ・ツリー', href: 'https://play.google.com/store/apps/details?id=app.codedrip.PomodoroTree&pcampaignid=web_share' },
      { name: 'ランダムルーレット', href: 'https://play.google.com/store/apps/details?id=app.codedrip.Spin&pcampaignid=web_share' },
      { name: 'フォントチェッカー', href: 'https://play.google.com/store/apps/details?id=app.codedrip.Font&pcampaignid=web_share' },
      { name: 'モールス信号変換ツール', href: 'https://play.google.com/store/apps/details?id=app.codedrip.MorseCode&pcampaignid=web_share' },
      { name: 'いいねフォント', href: 'https://play.google.com/store/apps/details?id=app.codedrip.SNSFont&pcampaignid=web_share' },
    ],
  },
  {
    name: '開発ツール（JavaScript）', items: [
      { name: 'JapanJS', href: 'https://github.com/japanjsorg/japanjs' },
      { name: 'eslint-plugin-regular-expression', href: 'https://eslint.regexp.app/ja/' },
      { name: 'hono-firebase-functions', href: 'https://github.com/takasqr/hono-firebase-functions' },
    ],
  },
  {
    name: '私について', items: [
      { name: 'プロフィール', href: 'https://hirameki.dev/ja/about/' },
      // { name: 'かいがらブログ', href: 'https://kaigara.blog/ja/blog/' },
      // { name: 'CodeDrip', href: 'https://codedrip.app/' }
    ],
  },
  {
    name: 'ルール', items: [
      { name: 'プライバシーポリシー', href: '/ja/privacy/' },
      { name: '利用規約', href: `https://hirameki.dev/ja/terms/` },
    ],
  },
]

  return navigations
}
