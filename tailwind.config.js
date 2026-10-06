/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          rose: {
            50: '#fff1f4',
            100: '#ffe4e9',
            200: '#fecdd6',
            300: '#fda4b8',
            400: '#fb7193',
            500: '#f43f6e',
            600: '#e11d53',
            700: '#be1241',
          },
          lavender: {
            50: '#faf5ff',
            100: '#f3e8ff',
            200: '#e9d5ff',
            300: '#d8b4fe',
            400: '#c084fc',
            500: '#a855f7',
          },
          peach: {
            50: '#fff7ed',
            100: '#ffedd5',
            200: '#fed7aa',
            300: '#fdba74',
            400: '#fb923c',
          },
          mint: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
          },
          cream: '#fdfbf7',
        },
        tsy: {
          navy: '#162447',
          gold: '#c8961d',
          shopee: '#ee4d2d',
          tiktok: '#0f172a',
          wa: '#25D366',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(244, 63, 110, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'glow-pink': '0 0 25px rgba(251, 113, 147, 0.35)',
        'glow-live': '0 0 20px rgba(238, 77, 45, 0.4)',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.03)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3.5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
