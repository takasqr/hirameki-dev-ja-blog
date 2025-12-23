<template>
  <p>Redirecting...</p>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['trailing-slash', 'redirect-router'],
})

// throw createError({
//   statusCode: 404,
//   statusMessage: 'Page Not Found',
// })
</script>
