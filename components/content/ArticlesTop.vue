<script setup lang="ts">
import { withTrailingSlash } from 'ufo'
import ArticleList from '../template/article-list/ArticleList.vue'
import type { Article } from '../types/Article';
// import ArticleList from './article-list/ArticleList.vue'

// @ts-ignore
// const { data: _articles } = await useAsyncData('articles', async () => await queryContent(withTrailingSlash(props.path)).sort({ date: -1 }).find())
const { data: _articles } = await useAsyncData('blog', async () => await queryContent(withTrailingSlash('blog')).where({ recommend: true }).sort({ date: -1 }).find())
const { data: _ja } = await useAsyncData('ja', async () => await queryContent(withTrailingSlash('ja')).where({ recommend: true }).sort({ date: -1 }).find())

// const articles = computed(() => _articles.value || [])
const blog = computed(() => _articles.value || [])
const ja = computed(() => _ja.value || [])

const articles = [...blog.value, ...ja.value]
// const articles = ja.value

const data: Article[] = articles as unknown as Article[]

// createDateを基に並び替える
data.sort((a, b) => new Date(b.createDate).getTime() - new Date(a.createDate).getTime());

</script>

<template>
  <div class="p-4 mt-20 sm:p-20">
    <ArticleList :articles="data"/>
  </div>
</template>
