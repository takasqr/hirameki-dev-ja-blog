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
    script: 
      [
        {
          key: 'gtm-head',
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','${getGTMID()}');`,
        },
      ],
    noscript: 
      [
        {
          key: 'gtm-body',
          innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=${getGTMID()}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          tagPosition: 'bodyOpen',
        },
      ],
  })
}

function isProduction(): boolean {
  const config = useRuntimeConfig()
  return config.public.IS_PRODUCTION as boolean
}

function getGTMID(): string {
  const config = useRuntimeConfig()
  return config.public.GTM_ID_BLOG as string
}