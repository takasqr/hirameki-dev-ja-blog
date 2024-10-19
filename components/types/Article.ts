export type Article = {
  _path: string
  title: string
  createDate: string
  description: string
  cover: string
  category: string
  categoryBasePath: string
  badges?: { bg: string, text: string, content: string }[]
}
