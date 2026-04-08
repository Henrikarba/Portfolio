/** @type {import('tailwindcss').Config} */
import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme'
export const content = [
  './src/**/*.{js,jsx,ts,tsx,svelte}',
  './src/index.html',
]
export const theme = {
  extend: {
    fontFamily: {
      'custom': ['neutraface', ..._fontFamily.sans],
    },
  },
}
export const variants = {}
export const plugins = []