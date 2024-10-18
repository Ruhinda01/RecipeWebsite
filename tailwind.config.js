/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        youngSerif: ['YoungSerif', 'serif'],
      },
      colors: {
        'white': 'hsl(0, 0%, 100%)',
        'stone-100': 'hsl(30, 54%, 90%)',
        'stone-150': 'hsl(30, 18%, 87%)',
        'stone-600': 'hsl(30, 10%, 34%)',
        'stone-900': 'hsl(24, 5%, 18%)',
        'brown-800': 'hsl(14, 45%, 36%)',
        'rose-800': 'hsl(332, 51%, 32%)',
        'rose-50': 'hsl(330, 100%, 98%)',
      }
    },
  },
  plugins: [],
}
