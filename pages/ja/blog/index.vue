<template>
  <div class="bg-white">
    <NuxtLayout>
      <main>
        <ArticleList :articles="articlesData" />
      </main>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { withTrailingSlash } from 'ufo'
import ArticleList from '../../../components/content/article-list/ArticleList.vue';
import type { Article } from '../../../components/types/Article';

definePageMeta({
  layout: 'ja-article'
})

// 非同期データ取得のための一意のキーを作成
const asyncDataKey = `articles-blog-all`
const path = '/ja/blog/'

const { data: articles } = await useAsyncData(asyncDataKey, async () => {
  const rawContent = await queryContent(withTrailingSlash(path))
    .where({ _partial: false })
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
