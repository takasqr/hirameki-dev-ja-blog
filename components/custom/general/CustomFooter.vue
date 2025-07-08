<template>
  <FooterTemplate
    :navigations="navigations"
    :rss-url="rssUrl"
  />
</template>

<script setup lang="ts">
import FooterTemplate from '@takasqr/tw-vue-ui/template/footer-template/FooterTemplate.vue'

const rssUrl = '/ja/blog/feed.xml'

const navigations = [
  {
    name: 'サービス', items: [
      { name: 'ひらめき開発', href: '/ja/' },
      { name: 'ポモドーロ・ツリー', href: 'https://pomodorotree.com/ja' },
    ],
  },
  {
    name: '開発', items: [
      { name: 'JapanJS', href: 'https://japanjs.org' },
      { name: 'eslint-plugin-regular-expression', href: 'https://eslint.regexp.app/ja/' },
      { name: 'hono-firebase-functions', href: 'https://github.com/takasqr/hono-firebase-functions' },
    ],
  },
  {
    name: '私について', items: [
      { name: 'プロフィール', href: '/ja/about/' },
      { name: 'かいがらブログ', href: '/ja/blog/' },
    ],
  },
  {
    name: 'ルール', items: [
      { name: 'プライバシーポリシー', href: '/ja/privacy/' },
      { name: '利用規約', href: `https://hirameki.dev/ja/terms/` },
    ],
  },
]
</script>
