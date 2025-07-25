// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'spin-reverse': 'spin 4s linear infinite reverse',
        'glitch': 'glitch 1s infinite',
      },
      keyframes: {
        glitch: {
          '0%': { transform: 'translate(0)' },
          '25%': { transform: 'translate(-1px, 1px)' },
          '50%': { transform: 'translate(-1px, -1px)' },
          '75%': { transform: 'translate(1px, 1px)' },
          '100%': { transform: 'translate(0)' },
        },
      },
    },
  },
  plugins: [],
}
