/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      sans: 'Roboto Mono, monospace',
    },

    //writing code to extends to all areas of app, keep original values but override them
    extend: {
      fontSize: {
        huge: ['80rem', { lineHeight: '1' }],
      },
      height: {
        screen: '100dvh'
      }
    },
  },
  plugins: [],
};
