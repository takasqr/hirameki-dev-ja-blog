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
    pattern: '^/p/(.*)$',
    redirect: '/ja/blog/$1',
  },
  {
    pattern: '^/e/ja/$',
    redirect: '/ja/image-editor/',
  },
  {
    pattern: '^/e/ja/(.*)$',
    redirect: '/ja/image-editor/$1',
  },
  {
    pattern: '^/n/ja/$',
    redirect: '/ja/security/',
  },
  {
    pattern: '^/n/ja/(.*)$',
    redirect: '/ja/security/$1',
  },
  {
    pattern: '^/z/ja/$',
    redirect: '/ja/hieroglyph/',
  },
  {
    pattern: '^/z/ja/(.*)$',
    redirect: '/ja/hieroglyph/$1',
  },
  // {
  //   pattern: '^/z/ja/$',
  //   redirect: '/z/ja/hieroglyph-list/',
  // },
  {
    pattern: '^/en/hieroglyph/$',
    redirect: '/z/en/',
  },
  {
    pattern: '^/en/hieroglyph/(.*)$',
    redirect: '/z/en/$1',
  },
  {
    pattern: '^/z/en/$',
    redirect: '/z/en/hieroglyph-list/',
  },
  {
    pattern: '^/de/hieroglyph/$',
    redirect: '/z/de/',
  },
  {
    pattern: '^/de/hieroglyph/(.*)$',
    redirect: '/z/de/$1',
  },
  {
    pattern: '^/z/de/$',
    redirect: '/z/de/hieroglyph-list/',
  },
  {
    pattern: '^/fr/hieroglyph/$',
    redirect: '/z/fr/',
  },
  {
    pattern: '^/fr/hieroglyph/(.*)$',
    redirect: '/z/fr/$1',
  },
  {
    pattern: '^/z/fr/$',
    redirect: '/z/fr/hieroglyph-list/',
  },
  {
    pattern: '^/it/hieroglyph/$',
    redirect: '/z/it/',
  },
  {
    pattern: '^/it/hieroglyph/(.*)$',
    redirect: '/z/it/$1',
  },
  {
    pattern: '^/z/it/$',
    redirect: '/z/it/hieroglyph-list/',
  },
  {
    pattern: '^/ko/hieroglyph/$',
    redirect: '/z/ko/',
  },
  {
    pattern: '^/ko/hieroglyph/(.*)$',
    redirect: '/z/ko/$1',
  },
  {
    pattern: '^/z/ko/$',
    redirect: '/z/ko/hieroglyph-list/',
  },
  {
    pattern: '^/b/ja/$',
    redirect: '/ja/morse-code/',
  },
  {
    pattern: '^/b/ja/(.*)$',
    redirect: '/ja/morse-code/$1',
  },
  {
    pattern: '^/b/ja/$',
    redirect: '/b/ja/morse-code-converter/',
  },
  {
    pattern: '^/en/morse-code/$',
    redirect: '/b/en/',
  },
  {
    pattern: '^/en/morse-code/(.*)$',
    redirect: '/b/en/$1',
  },
  {
    pattern: '^/s/ja/$',
    redirect: '/ja/roulette/',
  },
  {
    pattern: '^/s/ja/(.*)$',
    redirect: '/ja/roulette/$1',
  },
  {
    pattern: '^/s/en/$',
    redirect: '/en/spin-wheel/',
  },
  {
    pattern: '^/s/en/(.*)$',
    redirect: '/en/spin-wheel/$1',
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
    pattern: '^/en/japanese/$',
    redirect: '/a/en/',
  },
  {
    pattern: '^/en/japanese/(.*)$',
    redirect: '/a/en/$1',
  },
  {
    pattern: '^/a/en/hiragana/list/$',
    redirect: '/a/en/',
  },
  {
    pattern: '^/a/en/hiragana/$',
    redirect: '/a/en/',
  },
  {
    pattern: '^/a/en/katakana/list/$',
    redirect: '/a/en/',
  },
  {
    pattern: '^/a/en/katakana/$',
    redirect: '/a/en/',
  },
  // {
  //   pattern: '^/ja/$',
  //   redirect: '/ja/font/',
  // },
  {
    pattern: '^/$',
    redirect: '/ja/',
  },
  {
    pattern: '^/c/ja/(.*)$',
    redirect: '/ja/regexp/$1',
  },
]

export default defineNuxtRouteMiddleware((to) => {
  for (const rule of redirectRules) {
    const regex = new RegExp(rule.pattern)
    if (regex.test(to.path)) {
      const newPath = to.path.replace(regex, rule.redirect)

      // クエリをURLSearchParamsに全て展開（複数値対応）
      const params = new URLSearchParams()
      for (const [key, value] of Object.entries(to.query)) {
        if (Array.isArray(value)) {
          value.forEach(v => params.append(key, v ?? ''))
        }
        else if (value != null) {
          params.append(key, value as string)
        }
      }

      let fullPath = newPath
      const queryStr = params.toString()
      if (queryStr) {
        fullPath += `?${queryStr}`
      }
      if (to.hash) {
        fullPath += to.hash
      }

      return navigateTo(fullPath, { redirectCode: 301 })
    }
  }
})
