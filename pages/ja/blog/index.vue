<template>
  <div class="bg-white">
    <NuxtLayout>
      <main>
        <ArticleList :articles="articles" />
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
    .where({ _partial: false, recommend: true })
    .sort({ date: -1 })
    .find()

  // ParsedContent を Article にマッピング
  return rawContent.map(content => ({
    title: content.title,
    description: content.description,
    cover: content.cover,
    category: content.category,
    createDate: content.createDate,
  }) as unknown as Article)
})
</script>
