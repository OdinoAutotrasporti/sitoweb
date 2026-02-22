import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1B2A41',
        silver: '#D1D5D8',
        gold: '#A88E5E',
        dark: '#121820',
        light: '#F4F5F6',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        condensed: ['var(--font-condensed)', 'sans-serif'],
        body: ['var(--font-display)', 'sans-serif'],
      },
      backgroundImage: {
        'metal': `repeating-linear-gradient(
          90deg,
          rgba(255,255,255,0.02) 0px,
          rgba(255,255,255,0.02) 1px,
          transparent 1px,
          transparent 4px
        ), repeating-linear-gradient(
          180deg,
          rgba(255,255,255,0.01) 0px,
          rgba(255,255,255,0.01) 1px,
          transparent 1px,
          transparent 8px
        )`,
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        countUp: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.7s ease forwards',
        shimmer: 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
