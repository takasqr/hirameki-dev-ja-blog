import type { Component } from 'vue'

export type TreeMenuContent = {
  name: string
  href?: string
  onClick?: () => void
  icon?: Component
  current?: boolean
  subItems?: TreeMenuContent[]
  isOpen?: boolean
}
