/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0F',
        'bg-alt': '#12121A',
        surface: '#1A1A24',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(245, 158, 11, 0.15)',
        'glow-md': '0 0 40px rgba(245, 158, 11, 0.2)',
        'glow-lg': '0 0 60px rgba(245, 158, 11, 0.25)',
        'amber-btn': '0 0 20px rgba(245, 158, 11, 0.4)',
        'glow-border': '0 0 0 1px rgba(245, 158, 11, 0.3), 0 0 20px rgba(245, 158, 11, 0.15)',
      },
    },
  },
  plugins: [],
}
