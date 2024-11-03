import withNuxt from './.playground/.nuxt/eslint.config.mjs'
import patternRules from 'eslint-plugin-pattern-rules'

export default withNuxt(
  {
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },
  // pages ディレクトリでは必ずヘッダー情報を設定しなければならない
  {
    plugins: {
      'pattern-rules': patternRules,
    },
    files: ['pages/**/*.vue'],
    rules: {
      'pattern-rules/required-identifier': ['warn', { patterns: ['useSetHead'] }],
    },
  },
)