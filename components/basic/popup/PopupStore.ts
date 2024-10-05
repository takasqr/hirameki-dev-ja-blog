import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const PopupStore = defineStore('dialog', () => {

  // リアクティブにするために ref を使用する
  const _isOpen = ref(false)
  let _completion: ((isConfirmed: boolean | null) => void) | null = null
  // true にするとダイアログ以外の場所をタップしても消えない
  // ボタンでしか閉じれなくなる
  const _persistent = ref(false)

  // computed にすることで直接変更できなくする
  const isOpen = computed(() => _isOpen)
  const getPersistent = computed(() => _persistent)

  function open({ persistent = false, completion = null }: { persistent?: boolean; completion?: ((isConfirmed: boolean | null) => void) | null }) {
    _persistent.value = persistent
    _isOpen.value = true
    _completion = completion
  }

  function close({ isConfirmed = null }: { isConfirmed?: boolean | null }) {
 
    _isOpen.value = false
    _persistent.value = false

    // コールバック関数が含まれていれば実行
    if (_completion) {

      // 実行
      _completion(isConfirmed)

      // リセット
      _completion = null
    }
  }

  return { isOpen, getPersistent, open, close }
})
