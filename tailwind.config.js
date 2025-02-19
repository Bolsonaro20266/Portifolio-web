/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6D28D9',    // Purple
        secondary: '#2563EB',  // Blue
        neutral: {
          950: '#0A0A0F',
          900: '#121217',
          800: '#1F1F25',
          700: '#2E2E36',
          600: '#3D3D47',
          500: '#4C4C58',
          400: '#5B5B69',
          300: '#6A6A7A',
          200: '#79798B',
          100: '#88889C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Cabinet Grotesk', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
  plugins: [],
};