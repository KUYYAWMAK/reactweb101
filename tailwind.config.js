/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryTitle: '#D44A7E', 
        primaryContent: '#5F4B54', 
        primarySubcontent: '#E291B5', 
        primaryBase: '#F2C1D1', 
        primaryAccent: '#FF74B1', 
        primaryBg: '#FFF5F8', 
      },
    },
  },
  plugins: [],
}