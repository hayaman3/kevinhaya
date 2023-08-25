/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      md: {max:'992px'},
      sm: {max: '768px'},
      ss: {max: '576px'},
      xs: {max: '350px'},
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2.25rem',
        '4xl': '2.5rem',
      },

      scale: {
        '120': '1.20',
      },
        colors: {
      'title': 'hsl(0, 0%, 20%)',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        'profile-animate': {
          '0%' :{'border-radius': '60% 40% 30% 70%/60% 30% 70% 40%'},
          '50%': {'border-radius': '300% 60% 70% 40%/50% 60% 30% 60%'},
          '100%': {'border-radius': "60% 40% 30% 70%/60% 30% 70% 40%" },
        },
        'scroll': {
          '0%': {'transfrom': 'translateY(0)'},
          '50%': {'border-radius': '300% 60% 70% 40%/50% 60% 30% 60%'},
          '30%': {'transform': 'translateY(3.75rem)'}
        },

      },
      animation: {
        'waving-hand': 'wave 3s linear infinite',
        'border': 'profile-animate 8s ease-in-out infinite 1s',
        'wheel': 'scroll 2s ease infinite',
      },
    },
  },
  plugins: [],
}
