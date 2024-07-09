<<<<<<< HEAD
const withMT = require("@material-tailwind/react/utils/withMT");
 
 module.exports = withMT({
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   theme: {
     extend: {},
   },
   plugins: [],
 });
 
=======
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  darkMode:"class",
  theme: {
    extend: {
         colors: {
            primary: "#1182c5",
            secondary: "#2aa6df",
         },
    container:{
      center: true,
      padding: {
        default: "1rem",
        sm:"3rem",
      },
    },
    },
  },
  plugins: [],
};

>>>>>>> 9920cca23a65bcc125df87103e6f9eb544983ca6
