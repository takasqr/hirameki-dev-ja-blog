<template>
  <ArticleList :articles="articlesData" />
</template>

<script setup lang="ts">
import { withTrailingSlash } from 'ufo'
import ArticleList from '../../../components/content/article-list/ArticleListWithBorder.vue';
import type { Article } from '../../../components/types/Article';

const props = defineProps({
  tag: {
    type: String as PropType<string>,
    required: true
  }
})

// 非同期データ取得のための一意のキーを作成
const asyncDataKey = `articles-tag-${props.tag}`
const path = '/ja/blog/'

const { data: articles } = await useAsyncData(asyncDataKey, async () => {
  const rawContent = await queryContent(withTrailingSlash(path))
    .where({ _partial: false, tag: { $contains: props.tag } })
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

const articlesData = articles.value ?? []
</script>
