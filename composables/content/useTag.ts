export type Tag = {
  name: string
  count: number
}

/**
 * 指定されたパス以下のコンテンツからタグ一覧を取得し、
 * タグごとの出現回数を集計して返します。
 *
 * @param {string} [path='/'] - 検索対象のコンテンツパス（デフォルトはサイトルート）。
 * @returns {Promise<Tag[]>} - 各タグの名前と出現回数を含む配列。
 *
 * @example
 * const tags = await useTags('/blog')
 * // => [ { name: 'vue', count: 3 }, { name: 'nuxt', count: 2 } ]
 */
export async function useTag(path: string = '/'): Promise<Tag[]> {
  interface Article {
    tags?: string[]
  }

  const articles = await queryContent<Article>(path)
    .only(['tags'])
    .where({ tags: { $exists: true } })
    .find()

  const tagCounts: Record<string, number> = {}

  for (const article of articles) {
    if (Array.isArray(article.tags)) {
      for (const tag of article.tags) {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1
      }
    }
  }

  return Object.entries(tagCounts).map(([name, count]) => ({ name, count }))
}
