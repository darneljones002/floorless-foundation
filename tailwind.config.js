/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B2545", // deep navy
        accent: "#F6C14B", // collegiate gold
        student: "#8A1538", // collegiate maroon
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        display: ['"Poppins"', "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
