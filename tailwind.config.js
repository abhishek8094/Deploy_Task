/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
       "talk-to-sales":"url('https://printify.com/pfh/media/talk-to-sales-N2GDBAGC.svg')",
      }
    },
  },
  plugins: [],
}