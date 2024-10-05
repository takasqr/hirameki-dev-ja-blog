import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const DialogStore = defineStore('dialog', () => {

  // リアクティブにするために ref を使用する
  const _isOpen = ref(false)
  const _title = ref('')
  const _contentText = ref('')
  const _okButtonText = ref('')
  const _cancelButtonText = ref('')
  let _completion: ((isConfirmed: boolean | null) => void) | null = null
  // true にするとダイアログ以外の場所をタップしても消えない
  // ボタンでしか閉じれなくなる
  const _persistent = ref(false)

  // computed にすることで直接変更できなくする
  const isOpen = computed(() => _isOpen)
  const getTitle = computed(() => _title)
  const getContentText = computed(() => _contentText)
  const getOkButtonText = computed(() => _okButtonText)
  const getCancelButtonText = computed(() => _cancelButtonText)
  const getPersistent = computed(() => _persistent)

  function open({ title, contentText, okButtonText = 'OK', cancelButtonText = '', persistent = false, completion = null }: { title: string; contentText: string; okButtonText?: string; cancelButtonText?: string; persistent?: boolean; completion?: ((isConfirmed: boolean | null) => void) | null }) {

    _title.value = title
    _contentText.value = contentText
    _okButtonText.value = okButtonText
    _cancelButtonText.value = cancelButtonText
    _persistent.value = persistent
    _isOpen.value = true
    _completion = completion
  }

  function close({ isConfirmed = null }: { isConfirmed?: boolean | null }) {
 
    _isOpen.value = false
    _title.value = ''
    _contentText.value = ''
    _okButtonText.value = ''
    _cancelButtonText.value = ''
    _persistent.value = false

    // コールバック関数が含まれていれば実行
    if (_completion) {

      // 実行
      _completion(isConfirmed)

      // リセット
      _completion = null
    }
  }

  return { isOpen, getPersistent, getTitle, getContentText, getOkButtonText, getCancelButtonText, open, close }
})
