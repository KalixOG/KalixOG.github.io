/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#e6f3ff',
          100: '#cce7ff',
          500: '#1F8EFF',
          600: '#0066CC',
          700: '#004499',
        },
        electric: {
          blue: '#1F8EFF',
          cyan: '#00FFFF',
        },
        violet: {
          500: '#5F5CFF',
          600: '#4845E6',
        },
        acid: {
          green: '#A9FF68',
          500: '#A9FF68',
        },
        vivid: {
          orange: '#FF7A00',
          yellow: '#FFD700',
        },
        gray: {
          50: '#D8D8D8',
          100: '#C8C8C8',
          200: '#B8B8B8',
          300: '#A0A0A0',
          400: '#888888',
          500: '#6B6B6B',
          600: '#4A4A4A',
          700: '#2A2A2A',
          800: '#1a1a1a',
          900: '#0A0F24',
          950: '#0C0C0C',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
        'glitch': 'glitch 2s infinite',
        'fade-up': 'fade-up 0.6s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
        'particle-float': 'particle-float 20s infinite linear',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 0.4 },
          '50%': { opacity: 0.8 },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '10%': { transform: 'translate(-2px, -1px)' },
          '20%': { transform: 'translate(1px, 0px)' },
          '30%': { transform: 'translate(-1px, 1px)' },
          '40%': { transform: 'translate(2px, -1px)' },
          '50%': { transform: 'translate(-1px, 0px)' },
        },
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'particle-float': {
          '0%': { transform: 'translateY(100vh) translateX(0)' },
          '100%': { transform: 'translateY(-100vh) translateX(100px)' },
        },
        'neon-pulse': {
          '0%': { textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor' },
          '100%': { textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};