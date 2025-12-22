<template>
  <NuxtLayout>
    <template #title>
      <div class="prose lg:prose-xl">
        <h1>日常</h1>
      </div>
    </template>

    <div>
      <ArticleList :articles="articlesData" />
      <div class="mt-10">
        <Pagination :next-path="nextPagePath" :previous-path="previousPagePath" />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { withTrailingSlash } from 'ufo'
import ArticleList from '../../../../components/content/article-list/ArticleListWithBorder.vue';
import type { Article } from '../../../../components/types/Article';
import Pagination from '@takasqr/tw-vue-ui/basic/pagination/Pagination.vue'
import { useSetHead } from '../../../../composables/useSetHead'
import { useTotalPostCount } from '../../../../composables/content/useTotalPostCount';
import { getNextPage, getPreviousPage } from '../../../../utils/pagination'

definePageMeta({
  layout: 'ja-border',
  middleware: ['trailing-slash', 'redirect-router']
})

const route = useRoute()
const page = Number(route.query.page ? String(route.query.page) : '1')

// 非同期データ取得のための一意のキーを作成
const asyncDataKey = `journal-articles-all`
const path = '/ja/blog/journal/'
const perPage = 12
const totalPostCount = await useTotalPostCount(path)

const nextPageNumber = getNextPage({ currentPage: page, perPage: perPage, totalPostCount: totalPostCount })
const nextPagePath = getPagePath(nextPageNumber)

const previousPageNumber = getPreviousPage({ currentPage: page })
const previousPagePath = getPagePath(previousPageNumber)

const { data: articles } = await useAsyncData(asyncDataKey, async () => {
  const rawContent = await queryContent(withTrailingSlash(path))
    .where({ _partial: false })
    .skip((Number(page) - 1) * perPage)
    .limit(perPage)
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

function getPagePath(pageNumber: number | null): string | null {
  if (pageNumber == null) {
    return null
  } else {
    return `/ja/blog/journal/?page=${pageNumber}`
  }
}

useSetHead({
  title: '日常',
  description: 'ソフトウェアエンジニアが運営するブログ。技術的な記事や思ったことを投稿します。',
  cover: 'https://asset.hirameki.dev/img%2Fblog%2Fogp_image.webp?alt=media',
  path: route.path,
})
</script>
