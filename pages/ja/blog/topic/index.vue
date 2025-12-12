<template>
  <p>redirecting...</p>
</template>

<script setup lang="ts">
throw createError({
  statusCode: 404,
  statusMessage: 'Page Not Found',
})
</script>
