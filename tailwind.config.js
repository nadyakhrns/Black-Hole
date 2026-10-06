/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        space: {
          void: '#000005',
          deep: '#03050f',
          dark: '#070b1a',
          navy: '#0b1026',
          midnight: '#111842',
          twilight: '#1a2148',
        },
        glow: {
          blue: '#4d8bff',
          cyan: '#38d4ff',
          purple: '#8b6cff',
          violet: '#a96bff',
          amber: '#ffb84d',
          rose: '#ff5d8f',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 40s linear infinite',
        'spin-slower': 'spin 80s linear infinite',
        'spin-reverse-slow': 'spin-reverse 60s linear infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
      keyframes: {
        'spin-reverse': {
          'from': { transform: 'rotate(360deg)' },
          'to': { transform: 'rotate(0deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', filter: 'blur(40px)' },
          '50%': { opacity: '0.7', filter: 'blur(50px)' },
        },
        'orbit': {
          'from': { transform: 'rotate(0deg) translateX(60px) rotate(0deg)' },
          'to': { transform: 'rotate(360deg) translateX(60px) rotate(-360deg)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'twinkle': {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.8' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
