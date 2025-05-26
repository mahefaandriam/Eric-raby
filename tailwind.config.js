/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f5ff',
          100: '#e1ebff',
          200: '#c3d5fe',
          300: '#a1b9fc',
          400: '#7e99f8',
          500: '#5b78f4',
          600: '#3b57ea',
          700: '#2c42d3',
          800: '#1e3a8a',
          900: '#1a275d',
        },
        secondary: {
          50: '#f2f7f9',
          100: '#e6eff3',
          200: '#c6dbe3',
          300: '#a5c6d2',
          400: '#85afc1',
          500: '#6597b0',
          600: '#4f7d93',
          700: '#3e6375',
          800: '#2e4a5a',
          900: '#1f323e',
        },
        gold: {
          50: '#faf8ed',
          100: '#f6f1da',
          200: '#ede3b6',
          300: '#e4d492',
          400: '#dbc66d',
          500: '#d2b748',
          600: '#caa833',
          700: '#a7882b',
          800: '#856b22',
          900: '#62511a',
        },
        accent: {
          DEFAULT: '#C19A6B',
        },
        success: {
          DEFAULT: '#10B981',
          light: '#D1FAE5',
        },
        warning: {
          DEFAULT: '#F59E0B',
          light: '#FEF3C7',
        },
        error: {
          DEFAULT: '#EF4444',
          light: '#FEE2E2',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      spacing: {
        '128': '32rem',
      },
      boxShadow: {
        'luxury': '0 4px 14px 0 rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'gradient-xy': 'gradient-xy 1s ease infinite',
      },
      keyframes: {
        'gradient-xy': {
          '0%, 100%': { 'background-size': '400% 400%', 'background-position': 'top center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'bottom center' },
        },
      },
    },
  },
  plugins: [],
};