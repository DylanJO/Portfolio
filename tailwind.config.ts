import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':  'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'eerie-black': '#222222ff',
      'old-lace': '#f7eddbff',
      'light-sea-green': '#00a6a6ff',
      'tangerine': '#f08700ff',
      'india-green': '#3e8914ff'
    },
    fontFamily: {
      sans: ['Oswald', 'sans-serif'],
      Noto: ['Noto Sans Mono', 'monospace']
    }
  },
  plugins: [],
}
export default config
