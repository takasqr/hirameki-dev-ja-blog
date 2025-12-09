<template>
  <NuxtLayout>
    <template #title>
      <div class="prose">
        <h1>{{ topicTitle }} のメモ</h1>
        <p>
          {{ topicTitle }}に関する調査・検証メモをまとめたページです。
        </p>
      </div>
    </template>

    <article class="prose">
      <section
        v-for="(memo, index) in memos"
        :key="memo._path"
        class="mt-16"
      >
        <hr v-if="index !== 0" class="my-12 border-gray-300" >

        <h2>
          {{ memo.title }}
        </h2>

        <div class="text-sm text-gray-400 mb-4">
          {{ formatDate(memo.createDate) }}
        </div>

        <ContentRenderer :value="memo" />
      </section>
    </article>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useSetHead } from '../../../../composables/useSetHead'

definePageMeta({
  layout: 'ja-article-with-side',
  middleware: ['trailing-slash', 'redirect-router'],
})

type Memo = {
  _path: string
  title: string
  topic: string
  createDate: string | number | Date
}

const BASE_DIR = '/ja/blog'

const route = useRoute()
const slug = route.params.slug
const topic = decodeURIComponent(slug[0])

const topicTitle = computed(() => {
  return topic
})

// 🔽 複数メモを取得（新しい順）
const memos = await queryContent<Memo>(BASE_DIR)
  .where({ topic })
  .sort({ createDate: -1 })
  .find()

useSetHead({ 
  title: `${topicTitle.value}のメモ集｜hirameki.dev`,
  description: `${topicTitle.value}に関する技術メモ・検証記録をまとめたページです。`,
  cover: 'https://asset.hirameki.dev/img%2Fblog%2Fogp_image.webp?alt=media',
  path: route.fullPath,
})

// ✅ 日付整形
const formatDate = (date: string | number | Date) => {
  return new Date(date).toLocaleDateString('ja-JP')
}
</script>
