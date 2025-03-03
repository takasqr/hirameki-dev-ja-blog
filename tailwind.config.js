import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
    './node_modules/@takasqr/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        text: {
          light: '#1f2937', // gray-800
          DEFAULT: '#1f2937',
          dark: '#1f2937',
        },
        primary: {
          light: '#6366f1',
          DEFAULT: '#6366f1',
          dark: '#D0BCFF',
        },
        primaryVia: {
          light: '#29070d',
          DEFAULT: '#a855f7',
          dark: '#D0BCFF',
        },
        primaryTo: {
          light: '#29070d',
          DEFAULT: '#ec4899',
          dark: '#D0BCFF',
        },
        onPrimary: {
          light: '#FFFFFF',
          DEFAULT: '#FFFFFF',
          dark: '#381E72',
        },
        primaryContainer: {
          light: '#EADDFF',
          DEFAULT: '#EADDFF',
          dark: '#4F378B',
        },
        onPrimaryContainer: {
          light: '#21005D',
          DEFAULT: '#21005D',
          dark: '#EADDFF',
        },
        primaryFixed: {
          light: '#EADDFF',
          DEFAULT: '#EADDFF',
          dark: '#EADDFF',
        },
        primaryFixedDim: {
          light: '#D0BCFF',
          DEFAULT: '#D0BCFF',
          dark: '#D0BCFF',
        },
        onPrimaryFixed: {
          light: '#21005D',
          DEFAULT: '#21005D',
          dark: '#21005D',
        },
        onPrimaryFixedVariant: {
          light: '#4F378B',
          DEFAULT: '#4F378B',
          dark: '#4F378B',
        },
        secondary: {
          light: '#6366f1',
          DEFAULT: '#6366f1',
          dark: '#CCC2DC',
        },
        secondaryVia: {
          light: '#29070d',
          DEFAULT: '#a855f7',
          dark: '#CCC2DC',
        },
        secondaryTo: {
          light: '#29070d',
          DEFAULT: '#ec4899',
          dark: '#CCC2DC',
        },
        onSecondary: {
          light: '#FFFFFF',
          DEFAULT: '#FFFFFF',
          dark: '#332D41',
        },
        secondaryContainer: {
          light: '#E8DEF8',
          DEFAULT: '#E8DEF8',
          dark: '#4A4458',
        },
        onSecondaryContainer: {
          light: '#1D192B',
          DEFAULT: '#1D192B',
          dark: '#E8DEF8',
        },
        secondaryFixed: {
          light: '#E8DEF8',
          DEFAULT: '#E8DEF8',
          dark: '#E8DEF8',
        },
        secondaryFixedDim: {
          light: '#CCC2DC',
          DEFAULT: '#CCC2DC',
          dark: '#CCC2DC',
        },
        onSecondaryFixed: {
          light: '#1D192B',
          DEFAULT: '#1D192B',
          dark: '#1D192B',
        },
        onSecondaryFixedVariant: {
          light: '#4A4458',
          DEFAULT: '#4A4458',
          dark: '#4A4458',
        },
        tertiary: {
          light: '#6366f1',
          DEFAULT: '#6366f1',
          dark: '#EFB8C8',
        },
        tertiaryVia: {
          light: '#29070d',
          DEFAULT: '#a855f7',
          dark: '#EFB8C8',
        },
        tertiaryTo: {
          light: '#29070d',
          DEFAULT: '#ec4899',
          dark: '#EFB8C8',
        },
        onTertiary: {
          light: '#FFFFFF',
          DEFAULT: '#FFFFFF',
          dark: '#492532',
        },
        tertiaryContainer: {
          light: '#FFD8E4',
          DEFAULT: '#FFD8E4',
          dark: '#633B48',
        },
        onTertiaryContainer: {
          light: '#31111D',
          DEFAULT: '#31111D',
          dark: '#FFD8E4',
        },
        tertiaryFixed: {
          light: '#FFD8E4',
          DEFAULT: '#FFD8E4',
          dark: '#FFD8E4',
        },
        tertiaryFixedDim: {
          light: '#EFB8C8',
          DEFAULT: '#EFB8C8',
          dark: '#EFB8C8',
        },
        onTertiaryFixed: {
          light: '#31111D',
          DEFAULT: '#31111D',
          dark: '#31111D',
        },
        onTertiaryFixedVariant: {
          light: '#633B48',
          DEFAULT: '#633B48',
          dark: '#633B48',
        },
        error: {
          light: '#B3261E',
          DEFAULT: '#B3261E',
          dark: '#F2B8B5',
        },
        onError: {
          light: '#FFFFFF',
          DEFAULT: '#FFFFFF',
          dark: '#601410',
        },
        errorContainer: {
          light: '#F9DEDC',
          DEFAULT: '#F9DEDC',
          dark: '#8C1D18',
        },
        onErrorContainer: {
          light: '#410E0B',
          DEFAULT: '#410E0B',
          dark: '#F9DEDC',
        },
        surfaceDim: {
          light: '#DED8E1',
          DEFAULT: '#DED8E1',
          dark: '#141218',
        },
        surface: {
          light: '#FEF7FF',
          DEFAULT: '#FEF7FF',
          dark: '#141218',
        },
        surfaceBright: {
          light: '#FEF7FF',
          DEFAULT: '#FEF7FF',
          dark: '#3B383E',
        },
        surfaceContainerLowest: {
          light: '#FFFFFF',
          DEFAULT: '#FFFFFF',
          dark: '#0F0D13',
        },
        surfaceContainerLow: {
          light: '#F7F2FA',
          DEFAULT: '#F7F2FA',
          dark: '#1D1B20',
        },
        surfaceContainer: {
          light: '#F3EDF7',
          DEFAULT: '#F3EDF7',
          dark: '#211F26',
        },
        surfaceContainerHigh: {
          light: '#ECE6F0',
          DEFAULT: '#ECE6F0',
          dark: '#2B2930',
        },
        surfaceContainerHighest: {
          light: '#E6E0E9',
          DEFAULT: '#E6E0E9',
          dark: '#36343B',
        },
        onSurface: {
          light: '#1D1B20',
          DEFAULT: '#1D1B20',
          dark: '#E6E0E9',
        },
        surfaceVariant: {
          light: '#E7E0EC',
          DEFAULT: '#E7E0EC',
          dark: '#49454F',
        },
        onSurfaceVariant: {
          light: '#49454F',
          DEFAULT: '#49454F',
          dark: '#CAC4D0',
        },
        outline: {
          light: '#79747E',
          DEFAULT: '#79747E',
          dark: '#938F99',
        },
        outlineVariant: {
          light: '#CAC4D0',
          DEFAULT: '#CAC4D0',
          dark: '#49454F',
        },
        inverseSurface: {
          light: '#322F35',
          DEFAULT: '#322F35',
          dark: '#E6E0E9',
        },
        inverseOnSurface: {
          light: '#F5EFF7',
          DEFAULT: '#F5EFF7',
          dark: '#322F35',
        },
        inversePrimary: {
          light: '#D0BCFF',
          DEFAULT: '#D0BCFF',
          dark: '#6750A4',
        },
        scrim: {
          light: '#000000',
          DEFAULT: '#000000',
          dark: '#000000',
        },
        shadow: {
          light: '#000000',
          DEFAULT: '#000000',
          dark: '#000000',
        },
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
        background: {
          light: '#29070d',
          DEFAULT: '#ec4899',
          dark: '#141218',
        },
        onBackground: {
          light: '#1D1B20',
          DEFAULT: '#1D1B20',
          dark: '#E6E0E9',
        },
        // surface: {
        //   light: '#29070d',
        //   DEFAULT: '#ec4899',
        //   dark: '#0e7490',
        // },
      },
    },
  },
  plugins: [
    typography,
  ],
}
