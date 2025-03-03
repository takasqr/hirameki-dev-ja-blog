<template>
  <a
    href="https://twitter.com/share?ref_src=twsrc%5Etfw"
    class="twitter-share-button"
    data-show-count="false"
  >
    Tweet
  </a>
  <!-- <script
   async src="https://platform.twitter.com/widgets.js"
   charset="utf-8">
  </script> -->
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://platform.twitter.com/widgets.js'
  script.async = true
  script.charset = 'utf-8'
  document.head.appendChild(script)
})
</script>
