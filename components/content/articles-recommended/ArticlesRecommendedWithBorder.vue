<template>
  <ArticleList :articles="articlesData" />
</template>

<script setup lang="ts">
import { withTrailingSlash } from 'ufo'
import ArticleList from '../../../components/content/article-list/ArticleListWithBorder.vue';
import type { Article } from '../../../components/types/Article';
import { getHomepageArticles } from '../../../utils/getHomepageArticles'
import { getDeterministicRandomSubset } from '../../../utils/getDeterministicRandomSubset'

const props = defineProps({
  category: {
    type: String as PropType<string>,
    required: true
  }
})

// 非同期データ取得のための一意のキーを作成
const asyncDataKey = `articles-category-${props.category}`
const path = '/ja/blog/'

const { data: articles } = await useAsyncData(asyncDataKey, async () => {
  const rawContent = await queryContent(withTrailingSlash(path))
    .where({ _partial: false, category: props.category })
    .sort({ updated: -1 })
    .find()

  // ParsedContent を Article にマッピング
  return rawContent.map(content => ({
    _path: content._path,
    title: content.title,
    description: content.description,
    cover: content.cover,
    category: content.category,
    categoryBasePath: '/blog/tech/',
    createDate: content.createDate,
  }) as unknown as Article)
})

// homepage: true の記事を取得
const homepageArticles = await getHomepageArticles()

// homepage: true と同じカテゴリーの記事を合体
const recommendedArticles = [...homepageArticles, ...articles.value]

// 表示中の記事のパス一覧を作成
const currentArticlePaths = new Set(articles.value.map(article => article._path))

// 表示中の記事と重複しないようフィルタ
const filteredHomepageArticles = recommendedArticles.filter(article => !currentArticlePaths.has(article._path))

const articlesData = getDeterministicRandomSubset(filteredHomepageArticles, 12, 9999)
</script>
