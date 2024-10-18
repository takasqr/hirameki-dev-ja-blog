import withNuxt from './.playground/.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
  },
})