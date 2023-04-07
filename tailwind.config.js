module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        keyframes: {
          'hue-rotate': {
            '0%': { filter: 'hue-rotate(320deg)' },
            '50%': { filter: 'hue-rotate(270deg)' },
            '100%': { filter: 'hue-rotate(320deg)' },
          },
        },
        animation: {
          'hue-rotate': 'hue-rotate 10s infinite linear',
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  