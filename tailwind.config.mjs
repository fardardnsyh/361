/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: 'Roboto',
      title: 'Rubik',
      body: 'Roboto',
    },
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    logs: false,
    themes: [
      {
        dark: {
          ...require('daisyui/src/theming/themes')['dark'],
          primary: '#005AAD',
          accent: '#0E1337',
          error: '#CA1D1D',
          success: '#00AA46',
          info: '#59C8FF',
          warning: 'FFB35A',
          footer: '#005AAD',
          'neutral-content': '#EFEFEF',
          'base-100': '#2B2B2B',
          'base-200': '#EFEFEF',
          'base-300': '#59C8FF',
          'base-content': '#EFEFEF',
        },
      },
    ],
  },
}
