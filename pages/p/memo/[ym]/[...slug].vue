<template>
  <NuxtLayout>
    <template #title>

      <div class="prose">
        <h1>{{ article.title }}</h1>
      </div>
    </template>

    <ContentDoc v-slot="{ doc }">
      <article class="prose">
          <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>

    <div class="mt-10">
      <Pagination :next-path="nextPagePath" :previous-path="previousPagePath" />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { withTrailingSlash } from 'ufo'
import { useSetHead } from '../../../../composables/useSetHead'
import Pagination from '@takasqr/tw-vue-ui/basic/pagination/Pagination.vue'

definePageMeta({
  layout: 'ja-memo',
  middleware: ['trailing-slash', 'redirect-router'],
})

const route = useRoute()
const article = await queryContent(route.fullPath).findOne()

useSetHead({ 
  title: article.title,
  description: article.description,
  cover: article.cover,
  path: route.fullPath
})

// createDate → YYYYMMDD 数値キー（比較用）
function dateKey(d: string | number | Date): number {
  if (d instanceof Date) {
    const y = d.getFullYear()
    const m = String(d.getMonth() + 1).padStart(2, '0')
    const day = String(d.getDate()).padStart(2, '0')
    return Number(`${y}${m}${day}`)
  }
  const s = String(d)
  const digits = s.replace(/\D/g, '') // '2025/09/07' → '20250907'
  return Number(digits.slice(0, 8))   // 念のため 8桁に制限
}

type Memo = {
  _path: string
  title: string
  createDate: string | number | Date
}

const BASE_DIR = '/p/memo'

// /p/memo 配下すべて（再帰）
const allPosts = await queryContent<Memo>(BASE_DIR)
  .where({ _partial: false })
  .only(['_path', 'title', 'createDate'])
  .find()

// createDate 降順 → _path 昇順（安定化）
allPosts.sort((a, b) => {
  const ka = dateKey(a.createDate)
  const kb = dateKey(b.createDate)
  if (ka !== kb) return kb - ka // 降順
  return String(a._path).localeCompare(String(b._path))
})

const currentPath = withTrailingSlash(route.fullPath)
const idx = allPosts.findIndex(p => withTrailingSlash(p._path) === currentPath)

const previousPagePath = idx > 0 ? allPosts[idx - 1]._path : undefined
const nextPagePath = idx >= 0 && idx < allPosts.length - 1 ? allPosts[idx + 1]._path : undefined
</script>
