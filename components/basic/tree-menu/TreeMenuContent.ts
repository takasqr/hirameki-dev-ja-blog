export type TreeMenuContent = {
  name: string
  href?: string
  onClick?: () => void
  icon?: any
  current?: boolean
  subItems?: TreeMenuContent[]
  isOpen?: boolean
}
