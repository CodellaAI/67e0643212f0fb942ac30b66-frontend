
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: '#FF00FF',
          blue: '#00FFFF',
          green: '#00FF00',
          yellow: '#FFFF00',
          purple: '#9D00FF',
        },
        retro: {
          teal: '#008080',
          navy: '#000080',
          purple: '#800080',
          olive: '#808000',
          gray: '#C0C0C0',
          darkgray: '#808080',
        },
      },
      fontFamily: {
        pixel: ['VT323', 'monospace'],
        comic: ['"Comic Sans MS"', 'cursive'],
        retro: ['"Press Start 2P"', 'cursive'],
      },
      backgroundImage: {
        'stars': "url('/images/stars.png')",
        'grid': "url('/images/grid.png')",
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'blink': 'blink 1s step-end infinite',
        'rainbow': 'rainbow 5s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        rainbow: {
          '0%': { color: '#FF0000' },
          '15%': { color: '#FF00FF' },
          '30%': { color: '#0000FF' },
          '45%': { color: '#00FFFF' },
          '60%': { color: '#00FF00' },
          '75%': { color: '#FFFF00' },
          '90%': { color: '#FF7F00' },
          '100%': { color: '#FF0000' },
        },
      },
    },
  },
  plugins: [],
}
