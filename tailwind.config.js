/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2.25rem',
        '4xl': '2.5rem',
      },
      screens: {
        xs: {max: '350px'},
        ss: {max: '576px'},
        sm: {max: '768px'},
        md: {max:'992px'},
      },
        colors: {
      'title': '#333333',
      },
    },
  },
  plugins: [],
}
