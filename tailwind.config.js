/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'sage': {
          50: '#f0f6f3',
          100: '#daeae0',
          200: '#c2dccc',
          300: '#a9cdb7',
          400: '#96c3a7',
          500: '#84b898',
          600: '#7cb190',
          700: '#71a885',
          800: '#67a07b',
          900: '#54916a',
          A100: '#f6fff9',
          A200: '#c3ffd8',
          A400: '#90ffb6',
          A700: '#77ffa6',
        },
        'seafoam': {
          50: '#e5f4f3',
          100: '#bee4e1',
          200: '#93d3cd',
          300: '#67c1b8',
          400: '#47b3a9',
          500: '#26a69a',
          600: '#229e92',
          700: '#1c9588',
          800: '#178b7e',
          900: '#0d7b6c',
          A100: '#adfff3',
          A200: '#7affec',
          A400: '#47ffe4',
          A700: '#2dffe0',
        },
        'cream': '#EEEBE6',
        'lilac': '#C3B8C3'
      }
    }
  },
  plugins: [],
}
