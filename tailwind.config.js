/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg1': "url('/CapaNegociosEsporte.jpg')",
      },
      colors: {
        'azul': '#285a92',
      },
    },
  },
  plugins: [],
}
