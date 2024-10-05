import { ref } from 'vue'
import { defineStore } from 'pinia'

export const NotificationStore = defineStore('notification', () => {

  const isNotification = ref(false)

  return { isNotification }
})
