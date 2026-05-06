/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        display: ["Cinzel", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        gold: {
          light: '#f3e5ab',
          DEFAULT: '#d4af37',
          dark: '#aa891c',
        },
        obsidian: '#050505',
        charcoal: '#1a1a1a',
        cream: '#f9f6f2',
      },
    },
  },
  plugins: [],
}
