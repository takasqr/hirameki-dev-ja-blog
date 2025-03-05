import type { HeadParams } from "./types"
import { getPageTitle } from "../utils/getPageTitle"

export function useSetHead({ title, description, cover, path }: HeadParams) {
  if (title === undefined) {
    throw new Error('The \'title\' parameter is required and cannot be undefined.')
  }

  const pageTitle = getPageTitle(title, path)

  useHead({
    title: pageTitle,
    meta: [
      { name: 'description', content: description },
      // Open Graph
      { property: 'og:url', content: `https://hirameki.dev${path}` },
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: description },
      { property: 'og:image', content: cover },
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@takasqr' },
      { name: 'twitter:creator', content: '@takasqr' },
      // サムネイル指定
      { name: 'thumbnail', content: cover },
    ],
    link: [
      { rel: 'canonical', href: `https://hirameki.dev${path}` },
    ],
    // htmlAttrs: {
    //   // 言語は layout で設定する
    //   lang: 'ja',
    // },
  })
}

/**
 * 技術ブログのカテゴリーページに対して、head タグに必要な情報を生成する関数
 * 
 * @param {string} category - カテゴリー名。ページタイトルや URL に使用される
 * @returns {HeadParams} - ページの head 情報として使用するパラメータを返す
 */
export function getTechBlogCategoryHeadParams(category: string): HeadParams {
  const title = `${category} の記事一覧`
  const description = `${category} の記事一覧です。`
  const cover = `'https://res.cloudinary.com/takasqr/image/upload/l_text:Sawarabi%20Gothic_60_bold:${category}の記事一覧,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'`
  const path = `/ja/blog/tech/${category}`

  return { title, description, cover, path }
}