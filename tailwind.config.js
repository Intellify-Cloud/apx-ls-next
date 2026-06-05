/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#051424',
        surface: {
          DEFAULT: '#051424',
          dim: '#051424',
          bright: '#2c3a4c',
          container: {
            lowest: '#010f1f',
            low: '#0d1c2d',
            DEFAULT: '#122131',
            high: '#1c2b3c',
            highest: '#273647',
          },
          variant: '#273647',
        },
        primary: {
          DEFAULT: '#bec6e0',
          container: '#0f172a',
          fixed: '#dae2fd',
          'fixed-dim': '#bec6e0',
        },
        secondary: {
          DEFAULT: '#ed5c2c',
          container: '#dd5128',
          fixed: '#fde8e0',
          'fixed-dim': '#ed5c2c',
        },
        tertiary: {
          DEFAULT: '#bcc7de',
          container: '#0c1829',
          fixed: '#d8e3fb',
          'fixed-dim': '#bcc7de',
        },
        error: {
          DEFAULT: '#ffb4ab',
          container: '#93000a',
        },
        outline: {
          DEFAULT: '#909097',
          variant: '#45464d',
        },
        'on-surface': '#d4e4fa',
        'on-surface-variant': '#c6c6cd',
        'on-primary': '#283044',
        'on-primary-container': '#798098',
        'on-secondary': '#1a0500',
        'on-secondary-container': '#0a0200',
        'on-tertiary': '#263143',
        'on-tertiary-container': '#768197',
        'on-error': '#690005',
        'on-error-container': '#ffdad6',
      },
      fontFamily: {
        sans: ['var(--font-mulish)', 'system-ui', 'sans-serif'],
        display: ['var(--font-mulish)', 'system-ui', 'sans-serif'],
        inter: ['var(--font-mulish)', 'system-ui', 'sans-serif'],
        manrope: ['var(--font-mulish)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(190, 198, 224, 0.1)',
        'glow-md': '0 0 40px rgba(190, 198, 224, 0.15)',
        'glow-lg': '0 0 60px rgba(190, 198, 224, 0.2)',
        'amber-btn': '0 0 20px rgba(237, 92, 44, 0.3)',
      },
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
        full: '9999px',
      },
      animation: {
        bounce: 'bounce 1.5s infinite',
        'bounce-subtle': 'bounce-subtle 2s infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
          },
        },
        'bounce-subtle': {
          '0%, 100%': {
            transform: 'translateY(-5%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
          },
        },
      },
    },
  },
  plugins: [],
}

