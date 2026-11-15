/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F5C45',
        'primary-dark': '#0B4737',
        accent: '#3E9A6E',
        mint: '#E6F4EE',
        text: '#111827',
        body: '#6B7280',
        star: '#F59E0B',
      },
      boxShadow: {
        soft: '0 12px 32px rgba(15, 92, 69, 0.10)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

