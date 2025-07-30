/**
 * アイコン情報を設定する。
 * 
 * @param {Object} params - ページのアイコン情報を設定する
 * @param {string} params.svgPath - '/icon.svg'
 * @param {string} params.pngPath - '/icon.png'
 */
export function useSetIcon({ svgPath, pngPath }: { svgPath: string, pngPath: string }) {
  useHead({
    link: [
      {
        rel: 'icon',
        href: `${svgPath}`,
        type: 'image/svg+xml',
      },
      {
        rel: 'apple-touch-icon',
        href: `${pngPath}`,
      },
    ],
  })
}
