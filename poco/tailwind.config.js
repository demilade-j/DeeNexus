// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      /* Use CSS variables from src/index.css for consistent font sizing across Tailwind utilities */
      fontSize: {
        xs: ['var(--fs-xs)', { lineHeight: '1rem' }],
        sm: ['var(--fs-sm)', { lineHeight: '1.25rem' }],
        base: ['var(--fs-base)', { lineHeight: '1.5' }],
        lg: ['var(--fs-lg)', { lineHeight: '1.75' }],
        xl: ['var(--fs-xl)', { lineHeight: '1.75' }],
      },
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
