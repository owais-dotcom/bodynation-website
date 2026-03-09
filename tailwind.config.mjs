/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        blue: {
          50:  '#f0f4ff',
          100: '#e0eaff',
          200: '#c3d4fe',
          300: '#a0b8fc',
          400: '#7595f8',
          500: '#4f71f2',
          600: '#3452e6',
          700: '#1e50c8',
          800: '#1a3a8f',   // ← brand primary blue
          900: '#162f73',
          950: '#0d1e4d',
        },
        orange: {
          50:  '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f07320',   // ← brand orange mid
          600: '#e8620a',   // ← brand primary orange
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
      },
      animation: {
        'ticker':     'ticker 28s linear infinite',
        'float':      'float 5s ease-in-out infinite',
        'fade-up':    'fadeUp 0.6s ease both',
        'fade-down':  'fadeDown 0.5s ease both',
        'scale-in':   'scaleIn 0.4s ease both',
        'slide-left': 'slideLeft 0.6s ease both',
        'blink':      'blink 2s ease-in-out infinite',
      },
      keyframes: {
        ticker:    { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        float:     { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        fadeUp:    { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeDown:  { from: { opacity: '0', transform: 'translateY(-14px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        scaleIn:   { from: { opacity: '0', transform: 'scale(0.95)' }, to: { opacity: '1', transform: 'scale(1)' } },
        slideLeft: { from: { opacity: '0', transform: 'translateX(-28px)' }, to: { opacity: '1', transform: 'translateX(0)' } },
        blink:     { '0%,100%': { opacity: '1' }, '50%': { opacity: '0.3' } },
      },
      boxShadow: {
        'brand-sm': '0 2px 8px rgba(26,58,143,0.08)',
        'brand-md': '0 8px 24px rgba(26,58,143,0.12)',
        'brand-lg': '0 20px 48px rgba(26,58,143,0.14)',
        'brand-xl': '0 32px 80px rgba(26,58,143,0.16)',
        'orange-sm': '0 4px 16px rgba(232,98,10,0.2)',
        'orange-md': '0 8px 28px rgba(232,98,10,0.28)',
        'wa-sm':    '0 4px 16px rgba(37,211,102,0.3)',
        'wa-md':    '0 8px 28px rgba(37,211,102,0.4)',
      },
    },
  },
  plugins: [],
};
