/** @type {import('tailwindcss').Config} */
const AnimateCSS=require('animate-tailwindcss');
module.exports = AnimateCSS({
  content: [   
    "./src/**/*.{html,ts}",
 ],
 theme: {
   extend: {},
 },
 plugins: []

})
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

 


