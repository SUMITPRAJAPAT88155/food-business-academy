/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          50: '#f6f6f5',
          100: '#e8e8e6',
          200: '#d1d1ce',
          300: '#a8a8a3',
          400: '#75756f',
          500: '#4a4a45',
          600: '#33332f',
          700: '#242421',
          800: '#1a1a18',
          900: '#121211',
          950: '#0a0a09',
        },
        cream: {
          50: '#fdfbf7',
          100: '#faf6ee',
          200: '#f5ede0',
          300: '#ecdfc8',
          400: '#dcc9a4',
          500: '#c9ad7a',
          600: '#b8945a',
          700: '#997848',
          800: '#7d623d',
          900: '#665236',
        },
        gold: {
          50: '#fbf8ec',
          100: '#f6efcf',
          200: '#ecdd9f',
          300: '#e0c66a',
          400: '#d4af37',
          500: '#c9a227',
          600: '#a87f1c',
          700: '#876018',
          800: '#6e4e1b',
          900: '#5d421c',
        },
        terracotta: {
          50: '#fbf3f0',
          100: '#f6e3dc',
          200: '#ecc6b8',
          300: '#dca190',
          400: '#c97a64',
          500: '#b25c45',
          600: '#964a37',
          700: '#7a3c2e',
          800: '#653329',
          900: '#552c25',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
