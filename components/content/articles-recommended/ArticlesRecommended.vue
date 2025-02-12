<template>
  <ArticleList :articles="articlesData" />
</template>

<script setup lang="ts">
import { withTrailingSlash } from 'ufo'
import ArticleList from '../../../components/content/article-list/ArticleList.vue';
import type { Article } from '../../../components/types/Article';
import { getHomepageArticles } from '../../../utils/getHomepageArticles'
import { getRandomSubset } from '../../../utils/getRandomSubset'

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
    .sort({ createDate: -1 })
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

const recommendedArticles = [...homepageArticles, ...articles.value]

const articlesData = getRandomSubset(recommendedArticles, 12)
</script>
