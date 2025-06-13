import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app'

// const redirectRules = [
//   {
//     // 例: /old-page にアクセスされたら /new-page にリダイレクト
//     pattern: '^/old-page$',
//     redirect: '/new-page',
//   },
//   {
//     // 例: /old-blog/以下にアクセスされたら /blog/以下にパスを引き継いでリダイレクト
//     // /old-blog/abc => /blog/abc
//     pattern: '^/old-blog/(.*)$',
//     redirect: '/blog/$1',
//   },
//   {
//     // 例: /foo で始まる URL を /bar で始まる URL に置き換え
//     pattern: '^/foo/(.*)$',
//     redirect: '/bar/$1',
//   },
// ]

const redirectRules = [
  {
    pattern: '^/ja/font/serif/catalog/(.*)$',
    redirect: '/ja/font/serif/list/$1',
  },
  {
    pattern: '^/ja/font/sans-serif/catalog/(.*)$',
    redirect: '/ja/font/sans-serif/list/$1',
  },
  {
    pattern: '^/ja/blog/(.*)$',
    redirect: '/j/$1',
  },
  {
    pattern: '^/ja/morse-code/morse-code-converter/$',
    redirect: '/ja/morse-code/',
  },
  {
    pattern: '^/ja/morse-code/morse-code-decrypter/$',
    redirect: '/ja/morse-code/',
  },
  {
    pattern: '^/en/japanese/hiragana/list/$',
    redirect: '/en/japanese/',
  },
  {
    pattern: '^/en/japanese/hiragana/$',
    redirect: '/en/japanese/',
  },
  {
    pattern: '^/en/japanese/katakana/list/$',
    redirect: '/en/japanese/',
  },
  {
    pattern: '^/en/japanese/katakana/$',
    redirect: '/en/japanese/',
  },
]

export default defineNuxtRouteMiddleware(async (to) => {
  for (const rule of redirectRules) {
    const regex = new RegExp(rule.pattern)
    if (regex.test(to.path)) {
      // パスの一部置換を行いたい場合は replace を使用
      // 例: /old-blog/hoge -> /blog/hoge に置き換え
      const newPath = to.path.replace(regex, rule.redirect)

      // クエリパラメータや hash がある場合、付け直したい場合は
      // navigateTo のオプションや自前で追加するなどの対応も検討
      return navigateTo(
        newPath,
        {
          redirectCode: 301,
        },
      )
    }
  }
})
