import { type Preview, setup } from '@storybook/vue3'
// import { type Preview, setup, VueRenderer } from '@storybook/vue3'
// import { withThemeByClassName } from '@storybook/addon-themes';
import type { App } from 'vue';

// Tailwind を読み込む
import '../assets/css/main.css'

import { createPinia } from 'pinia';
// import VueKonva from 'vue-konva'

// Pinia をセットアップ
const pinia = createPinia();

setup((app: App) => {
  app.use(pinia);
  // app.use(VueKonva)
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    // withThemeByClassName<VueRenderer>({
    //   themes: {
    //     light: '',
    //     dark: 'dark',
    //   },
    //   defaultTheme: 'light',
    // }),
  ]
}

export default preview
