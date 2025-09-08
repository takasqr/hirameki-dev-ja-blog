<template>
  <NuxtLayout>
    <template #title>
      <div class="prose lg:prose-xl">
        <h1>メモ</h1>
      </div>
    </template>

    <div>
      <ArticleListTextOnly :articles="articlesData" />

      <div class="mt-10">
        <Pagination :next-path="nextPagePath" :previous-path="previousPagePath" />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { withTrailingSlash } from 'ufo'
import ArticleListTextOnly from '../../../components/content/article-list/ArticleListTextOnly.vue';
import type { Article } from '../../../components/types/Article';
import Pagination from '@takasqr/tw-vue-ui/basic/pagination/Pagination.vue'
import { useSetHead } from '../../../composables/useSetHead'
import { useTotalPostCount } from '../../../composables/content/useTotalPostCount';
import { getNextPage, getPreviousPage } from '../../../utils/pagination'

definePageMeta({
  layout: 'ja-blog-default',
  middleware: ['trailing-slash'],
})

const route = useRoute()
const page = Number(route.query.page ? String(route.query.page) : '1')

// 非同期データ取得のための一意のキーを作成
const asyncDataKey = `memo-all`
const path = '/p/memo/'
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
    createDate: content.createDate,
  }) as unknown as Article)
})

const articlesData = articles.value ?? []

function getPagePath(pageNumber: number | null): string | null {
  if (pageNumber == null) {
    return null
  } else {
    return `/p/memo/?page=${pageNumber}`
  }
}

useSetHead({
  title: 'メモ',
  description: 'ブログ未満、Xのポスト以上の情報量の文章をここに書いています。',
  cover: 'https://asset.hirameki.dev/img%2Fblog%2Fogp_image.webp?alt=media',
  path: route.path,
})
</script>
