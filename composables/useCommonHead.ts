import { useHead } from '#imports'

export const useCommonHead = () => {
  useHead({
    meta: isProduction()
      ? []
      : [
          {
            name: 'robots',
            content: 'noindex',
          },
        ],
  })
}

function isProduction(): boolean {
  const config = useRuntimeConfig()
  return config.public.IS_PRODUCTION as boolean
}
