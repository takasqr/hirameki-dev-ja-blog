export type Category = {
  name: string
  count: number
}

export async function useCategory(path: string = '/'): Promise<Category[]> {
  interface Article {
    category?: string
  }

  // `queryContent<Article>()` で型を適用
  const categories = await queryContent<Article>(path)
    .only(['category'])
    .where({ category: { $exists: true } }) // `$exists: true` に変更
    .find()

  // カテゴリーのカウント用の型を定義
  const categoryCounts: Record<string, number> = categories.reduce((acc, article) => {
    if (article.category) {
      acc[article.category] = (acc[article.category] || 0) + 1
    }
    return acc
  }, {} as Record<string, number>)

  // `{ name, count }` の配列に変換
  return Object.entries(categoryCounts).map(([name, count]) => ({ name, count }))
}
