<template>
  <Button class="bg-gradient-to-r from-primary dark:from-primary-dark via-primaryVia dark:via-primaryVia-dark to-primaryTo dark:to-primaryTo-dark text-white font-bold">
    <slot></slot>
  </Button>
</template>

<script setup lang="ts">
import Button from '../../basic/button/Button.vue'
</script>