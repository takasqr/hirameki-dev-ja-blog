<template>
  <div class="bg-white">
    <NuxtLayout>

      <main>
        <ArticlesList/>
      </main>
    </NuxtLayout>
  </div>
</template>

<script setup>
import ArticlesList from '../../../components/content/ArticlesList.vue';

definePageMeta({
  layout: 'ja-article'
})
</script>
