/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  // darkMode: 'selector',
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
          'bg-primary': 'var(--bg-primary)',
          'bg-secondary': 'var(--bg-secondary)',
          main: 'var(--main)',
          accent: 'var(--accent)',
          'accent-alt': 'var(--accent-alt)',
          text: 'var(--text)',
          error: 'var(--error)',
          'error-alt': 'var(--error-alt)',
        },
      },
    },
  },
  plugins: [],
}
