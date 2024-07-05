/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'first-section-img': "url('/src/assets/1.webp')",
        'second-section-img': "url('/src/assets/2.webp')",
        'third-section-img': "url('/src/assets/3.webp')",
      },
      scale: {
        '105': '1.05',
      },
    },
    fontFamily: {
      'neutral-face': ['"Neutral Face"', 'ui-sans-serif', 'system-ui'],
      'lt-superior': ['"LT Superior"', 'ui-sans-serif', 'system-ui'],
    },
  },
  variants: {
    scale: ['hover'],
  },
  plugins: [],
}