<script setup lang="ts">
import { withTrailingSlash } from 'ufo'
import ArticleList from '../template/article-list/ArticleList.vue'
import type { Article } from '../types/Article';

const props = defineProps({
  category: {
    type: String,
    required: true
  }
})

// @ts-ignore
const { data: _articles } = await useAsyncData('blog', async () => await queryContent(withTrailingSlash('blog')).where({ category: props.category }).sort({ date: -1 }).find())
const { data: _ja } = await useAsyncData('ja', async () => await queryContent(withTrailingSlash('ja')).where({ category: props.category }).sort({ date: -1 }).find())

const blog = computed(() => _articles.value || [])
const ja = computed(() => _ja.value || [])

const articles = [...blog.value, ...ja.value]

const data: Article[] = articles as unknown as Article[]

</script>

<template>
  <ArticleList :articles="data"/>
</template>
