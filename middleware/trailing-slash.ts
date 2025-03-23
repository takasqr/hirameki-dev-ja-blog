// Nuxt Layers では現状、middleware は共有できない模様
// 同じコードが本体、blog 両方にあるので注意
export default defineNuxtRouteMiddleware((to) => {
  // SSR時 or クライアント遷移時の両方で実行される

  // 末尾スラッシュがすでにある or ドットを含む（ファイルっぽい）パスはスルー
  if (to.path.endsWith('/') || to.path.includes('.')) {
    return
  }

  // 末尾スラッシュを付けてリダイレクト（301）する
  return navigateTo(
    {
      path: to.path + '/',
      query: to.query,
      hash: to.hash,
    },
    {
      redirectCode: 301,
    },
  )
})
