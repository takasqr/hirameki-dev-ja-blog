<template>
  <div class="bg-white">
    <NuxtLayout>
      <main>
        <ArticleList :articles="articlesData" />
        <div class="mt-10">
          <Pagination :next-path="nextPagePath" :previous-path="previousPagePath" />
        </div>
      </main>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { withTrailingSlash } from 'ufo'
import ArticleList from '../../../components/content/article-list/ArticleList.vue';
import type { Article } from '../../../components/types/Article';
import Pagination from '@takasqr/tw-vue-ui/basic/pagination/Pagination.vue'
import useSetHead from '../../../composables/useSetHead'

definePageMeta({
  layout: 'ja-article'
})

const route = useRoute()
const page = route.query.page ? String(route.query.page)[0] : '1'

const perPage = 12

// 非同期データ取得のための一意のキーを作成
const asyncDataKey = `articles-blog-all`
const path = '/ja/blog/'

const nextPageNumber = getNextPage(page)
const nextPagePath = getPagePath(nextPageNumber)

const previousPageNumber = getPreviousPage(page)
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

function getNextPage(page: string): string | null {
  const pageNumber = Number(page) + 1

  return String(pageNumber)
}

function getPreviousPage(page: string): string | null {
  if (Number(page) <= Number('1')) {
    return null
  } else {
    const pageNumber = Number(page) - 1
    return String(pageNumber)
  }
}

function getPagePath(pageNumber: string | null): string | null {
  if (pageNumber == null) {
    return null
  } else {
    return `/ja/blog?page=${pageNumber}`
  }
}
</script>
