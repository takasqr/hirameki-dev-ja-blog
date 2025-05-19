<script setup lang="ts">
// グローバルウィンドウオブジェクトの型拡張 / Extend global window object type
import { onMounted, onUnmounted, ref } from 'vue';

declare global {
  interface Window {
    onTurnstileSuccess: (token: string) => void;
  }
} // Import ref / ref をインポート

useHead({
  script: [
    {
      src: 'https://challenges.cloudflare.com/turnstile/v0/api.js',
      async: true,
      defer: true,
    },
  ],
})

// Props definition / Props定義
interface Props {
  turnstileSiteKey?: string; // Cloudflare Turnstileのサイトキー / Cloudflare Turnstile site key
}

// Define props with defaults / デフォルト値付きでPropsを定義
const props = withDefaults(defineProps<Props>(), {
  turnstileSiteKey: '', // デフォルトは空文字列
});

// Define emits / emit を定義
const emit = defineEmits<{
  (e: 'token', turnstileToken: string): void;
}>();

const turnstileToken = ref<string | null>(null)

onMounted(() => {
  // グローバル関数を一時的に定義
  window.onTurnstileSuccess = (token: string) => {
    turnstileToken.value = token

    emit('token', turnstileToken.value);
  }
})

onUnmounted(() => {
  // コンポーネントが破棄されたら削除 / Remove when component is unmounted
  // 型アサーションを使用して型安全に削除 / Use type assertion for type-safe deletion
  delete ((window as unknown) as Record<string, unknown>)['onTurnstileSuccess']
})
</script>

<template>
  <div
    class="cf-turnstile"
    :data-sitekey="props.turnstileSiteKey"
    data-callback="onTurnstileSuccess"
    data-theme="dark"
  />
</template>
