/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        }
      },
      animation: {
        'blink': 'wiggle 1s ease-in-out infinite',
      },
      colors: {
        theme: {
          'bg': 'var(--bg)',
          'bg-alt': 'var(--bg-alt)',
          main: 'var(--main)',
          accent: 'var(--accent)',
          'accent-alt': 'var(--accent-alt)',
          text: 'var(--text)',
        },
      },
      fontFamily: {
        'sans': ['"Fira Code"', ...defaultTheme.fontFamily.mono],
        'mono': ['"Fira Code"', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
}
