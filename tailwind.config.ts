import type { Config } from 'tailwindcss'

import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: 'rgb(var(--root-color))',
      secondary: 'rgb(var(--root-color-secondary))',
      gray: 'rgb(var(--root-color-gray))',
      white: 'rgb(var(--root-color-white))',
      black: 'rgb(var(--root-color-black))'
    },
    extend: {},
  },
  darkMode: 'class',
  plugins: [nextui()],
}
export default config
