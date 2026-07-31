/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          hover: '#4338CA',
          light: '#EEF2FF',
          dark: '#3730A3',
        },
        secondary: {
          DEFAULT: '#7C3AED',
          hover: '#6D28D9',
          light: '#F5F3FF',
        },
        accent: {
          DEFAULT: '#06B6D4',
          hover: '#0891B2',
          light: '#ECFEFF',
        },
        darkBg: '#0F172A',
        surface: '#F8FAFC',
        heading: '#111827',
        bodyText: '#4B5563',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'card': '16px',
        'xl': '16px',
        '2xl': '20px',
        '3xl': '24px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glow': '0 0 25px -5px rgba(79, 70, 229, 0.4)',
        'accent-glow': '0 0 25px -5px rgba(6, 182, 212, 0.4)',
        'card-hover': '0 20px 40px -15px rgba(79, 70, 229, 0.15)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
