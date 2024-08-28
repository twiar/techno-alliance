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
      colors: {
        'primary': '#c8eefb',
        'light': '#e7f4fa',
      },
      transitionProperty: {
        height: 'height',
      },
    },
    fontFamily: {
      'geologica': ['"Geologica"', 'ui-sans-serif', 'system-ui'],
    },
  },
  variants: {
    scale: ['hover'],
  },
  plugins: [],
}