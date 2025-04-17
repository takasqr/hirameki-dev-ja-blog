import type { HeadParams } from "./types"
import { getPageTitle } from "../utils/getPageTitle"
import { siteConfig } from "./config/siteConfig"
import { encodeImageUrl } from "../utils/url"

export function useSetHead({ title, description, cover, path }: HeadParams) {
  if (title === undefined) {
    throw new Error('The \'title\' parameter is required and cannot be undefined.')
  }

  const pageTitle = getPageTitle(title, path)
  const encodedCover = encodeImageUrl(cover)

  useHead({
    title: pageTitle,
    meta: [
      { name: 'description', content: description },
      // Open Graph
      { property: 'og:url', content: `${siteConfig.baseUrl}${path}` },
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: description },
      { property: 'og:image', content: encodedCover },
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: siteConfig.twitter.site },
      { name: 'twitter:creator', content: siteConfig.twitter.creator },
      // サムネイル指定
      { name: 'thumbnail', content: encodedCover },
    ],
    link: [
      { rel: 'canonical', href: `${siteConfig.baseUrl}${path}` },
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
  const cover = `'https://res.cloudinary.com/takasqr/image/upload/l_text:MPLUS1p-Black.ttf_60_bold:${category}の記事一覧,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'`
  const path = `/ja/blog/tech/${category}`

  return { title, description, cover, path }
}

/**
 * 技術ブログのカテゴリーページに対して、head タグに必要な情報を生成する関数
 * 
 * @param {string} category - カテゴリー名。ページタイトルや URL に使用される
 * @returns {HeadParams} - ページの head 情報として使用するパラメータを返す
 */
export function getJournalBlogCategoryHeadParams(year: string): HeadParams {
  const title = `${year} 年の記事一覧`
  const description = `${year} 年の記事一覧です。`
  const cover = `'https://res.cloudinary.com/takasqr/image/upload/l_text:MPLUS1p-Black.ttf_60_bold:${year}年の記事一覧,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'`
  const path = `/ja/blog/journal/${year}`

  return { title, description, cover, path }
}
