import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        oreglega: ['EB Garamond', 'serif'],
        philosopher: ['Philosopher','sans-serif']
      }
    },
  },
  plugins: [],
}
export default config
