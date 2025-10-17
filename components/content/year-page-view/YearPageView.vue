<template>
  <div class="">
    <ArticleList :articles="articlesData" />
  </div>  
</template>

<script setup lang="ts">
import { withTrailingSlash } from 'ufo'
import ArticleList from '../../../components/content/article-list/ArticleList.vue';
import type { Article } from '../../../components/types/Article';
import type { QueryBuilderWhere } from '@nuxt/content'

const props = defineProps({
  year: {
    type: String as PropType<string>,
    required: true
  }
})

// 非同期データ取得のための一意のキーを作成
const asyncDataKey = `articles-year-${props.year}`
const path = '/p/journal'

const start = new Date(`${props.year}-01-01T00:00:00.000Z`).getTime()
const end = new Date(`${props.year}-12-31T23:59:59.999Z`).getTime()

// スラッシュ区切りの日付をDateに変換するヘルパー
const slashDateToTime = (slashDateStr: string) => {
  // "2021/08/01" → "2021-08-01" に置換してから Date() に渡す
  return new Date(slashDateStr.replace(/\//g, '-')).getTime()
}

const dateRange: QueryBuilderWhere = {
  $gte: start,
  $lte: end
}

const { data: articles } = await useAsyncData(asyncDataKey, async () => {
  // まずすべての記事を取得
  // 全件取得はよくない。遅くなってきたら修正する
  let rawContent = await queryContent(withTrailingSlash(path))
    .where({ _partial: false })
    .find()

  // 「スラッシュ区切り createDate」を数値比較するために手動フィルタ
  rawContent = rawContent.filter((item) => {
    const dateMs = slashDateToTime(item.createDate) // ミリ秒に変換
    return dateMs >= start && dateMs <= end
  })

  // ついでにcreateDateで降順ソート
  rawContent.sort((a, b) => {
    return slashDateToTime(b.createDate) - slashDateToTime(a.createDate)
  })

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
