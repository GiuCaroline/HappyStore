/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        italiana: ['Italiana', 'serif'],
      },
      colors: {
        'branco': '#FAFAFA',
        'preto': '#121212',
        'laranja': '#FE6100',
        'laranjaEscuro': '#C84A00',
      },
    },
  },
  plugins: [],
}
