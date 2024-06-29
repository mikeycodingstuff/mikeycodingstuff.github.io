/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  // darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        theme: {
          main: 'var(--main)',
          title: 'var(--title)',
          text: 'var(--text)',
          accent: 'var(--accent)',
          'bg-primary': 'var(--bg-primary)',
          'bg-secondary': 'var(--bg-secondary)',
        },
      },
    },
  },
  plugins: [],
}
