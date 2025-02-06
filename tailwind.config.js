/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          100: "#f7e8e1", // Light Brown
          200: "#e9d6c8",
          300: "#dbc4af",
          400: "#cfa992",
          500: "#FFAE42", // Primary Brown
          600: "#976f54",
          700: "#75553f",
          800: "#543c2c",
          900: "#F88379", // Dark Brown
        },
      },
    },
  },
  plugins: [],
};
