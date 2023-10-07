/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      backgroundColor: ['group-hover'],
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

