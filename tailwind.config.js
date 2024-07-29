/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container : {center : true},
      colors : {
        "primary" : "#606c38",
        "secondary" : "#fefae0",
        "third" : "#540b0e",
        "primary-green" : "#283618",
        "cyan" : "#335c67",

        "eror" : "#ff5761",
        "warning" : "#ffbe00",
        "success" : "#00a96e",
        "info" : "#00b5ff",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui:{
    themes:[
      "night","cupcake"
    ]
  }
};
