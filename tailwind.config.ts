import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        black: '#000000',

        // Salesforce Inspired Palette
        'sf-blue': '#0176D3',
        'sf-blue-dark': '#005FB2',
        'sf-blue-light': '#EBF5FF',

        'sf-gray-50': '#F8F9FA',
        'sf-gray-100': '#F1F3F5',
        'sf-gray-200': '#E9ECEF',
        'sf-gray-300': '#DEE2E6',
        'sf-gray-400': '#CED4DA',
        'sf-gray-500': '#ADB5BD',
        'sf-gray-600': '#868E96',
        'sf-gray-700': '#495057',
        'sf-gray-800': '#343A40',
        'sf-gray-900': '#212529',

        // Semantic Colors
        primary: {
          DEFAULT: '#0176D3',
          dark: '#005FB2',
          light: '#EBF5FF',
        },
        background: {
          DEFAULT: '#212529',
          light: '#F8F9FA',
          dark: '#343A40',
        },
        copy: {
          DEFAULT: '#E9ECEF',
          light: '#495057',
          secondary: '#ADB5BD',
          'dark-secondary': '#868E96',
        },

        success: '#28A745',
        warning: '#FFC107',
        error: '#DC3545',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid': "url('/grid.svg')",
      },
      keyframes: {
        'gradient-shift': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'gradient-shift': 'gradient-shift 10s ease infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
      },
      backgroundSize: {
        '200%': '200%',
      },
    },
  },
  plugins: [],
};

export default config;
