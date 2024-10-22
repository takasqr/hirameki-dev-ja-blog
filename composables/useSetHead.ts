export function useSetHead({ title, description, cover, path }: { title: string | undefined, description: string, cover: string, path: string }) {
  if (title === undefined) {
    throw new Error('The \'title\' parameter is required and cannot be undefined.')
  }

  useHead({
    title: title,
    meta: [
      { name: 'description', content: description },
      // Open Graph
      { property: 'og:url', content: `https://hirameki.dev${path}` },
      { property: 'og:title', content: title + ' | ひらめき開発' },
      { property: 'og:description', content: description },
      { property: 'og:image', content: cover },
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@takasqr' },
      { name: 'twitter:creator', content: '@takasqr' },
      // サムネイル指定
      { name: 'thumbnail', content: cover },
    ],
    link: [
      { rel: 'canonical', href: `https://hirameki.dev${path}` },
    ],
  })
}
