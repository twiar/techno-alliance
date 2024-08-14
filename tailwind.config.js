/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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