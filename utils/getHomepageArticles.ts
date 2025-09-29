import type { Article } from '../components/types/Article'
import { withTrailingSlash } from 'ufo'

/**
 * ホームページの記事をコンテンツデータベースから取得します。
 *
 * `homepage: true` が設定されたコンテンツを取得し、`createDate` の降順でソートします。
 * 取得中にエラーが発生した場合、エラーログを出力し、空の配列を返します。
 *
 * @returns {Promise<Article[]>} 記事の配列を解決する Promise。
 */
function getHomepageArticles(): Promise<Article[]> {
  const asyncDataKey = `tech-articles-homepage`
  const path = '/p/'

  return useAsyncData(asyncDataKey, async () => {
    const rawContent = await queryContent(withTrailingSlash(path))
      .where({ homepage: true })
      .sort({ createDate: -1 })
      .find()

    return rawContent.map(content => ({
      _path: content._path,
      title: content.title,
      description: content.description,
      cover: content.cover,
      category: content.category,
      categoryBasePath: '/blog/tech/',
      createDate: content.createDate,
    }) as Article)
  }).then(({ data }) => data.value || []).catch(error => {
    console.error("ホームページの記事の取得に失敗しました:", error);
    return [];
  });
}

export { getHomepageArticles }