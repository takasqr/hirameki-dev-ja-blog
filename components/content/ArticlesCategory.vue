<script setup lang="ts">
import { withTrailingSlash } from 'ufo'
import ArticleList from '../template/article-list/ArticleList.vue'

const props = defineProps({
  category: {
    type: String,
  }
})

console.log(props.category)

// @ts-ignore
const { data: _articles } = await useAsyncData('blog', async () => await queryContent(withTrailingSlash('blog')).where({ category: props.category }).sort({ date: -1 }).find())
const { data: _ja } = await useAsyncData('ja', async () => await queryContent(withTrailingSlash('ja')).where({ category: props.category }).sort({ date: -1 }).find())

const blog = computed(() => _articles.value || [])
const ja = computed(() => _ja.value || [])

const articles = [...blog.value, ...ja.value]

const data: Article[] = articles as unknown as Article[]

console.log(data[0])
</script>

<template>
  <div class="p-4 mt-20 md:p-20">
    <ArticleList :articles="data"></ArticleList>
  </div>
</template>
