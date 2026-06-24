/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      mobile: '100px',
      tablate: '600px',
      desktop: '1000px'
    },
    extend: {
      colors: {
        blue: '#2563eb',
        oranged: '#ea580f',
        darkBlue: '#0f172a',
        green: '#059669',
        surface: {
          DEFAULT: '#ffffff',
          muted: '#f1f5f9',
          dark: '#1e293b',
          'dark-muted': '#0f172a'
        },
        ink: {
          DEFAULT: '#0f172a',
          muted: '#64748b',
          light: '#94a3b8'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif']
      },
      boxShadow: {
        card: '0 1px 3px rgba(15, 23, 42, 0.08), 0 8px 24px rgba(15, 23, 42, 0.06)',
        'card-hover': '0 4px 12px rgba(15, 23, 42, 0.1), 0 16px 40px rgba(15, 23, 42, 0.08)'
      }
    }
  },
  plugins: []
}
