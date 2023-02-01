/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontSize: {
        // "10px": "10px",
        // "11px": "11px",
        // "12px": "12px",
        // "14px": "14px",
      },
      colors: {
        primary: "#212529",
        secondary: "#49d49d",
        third_color:"#a882dd",
        border_primary: "#222222",
        background_primary:"#49d49d10",
        background_secondary:"#14363d",

      },
    },
  },
  plugins: [],
}