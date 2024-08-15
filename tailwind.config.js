/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#092042",
        secondary: "#243647",
        third: "#1A80E5",
        disabled: "#9e9d9d",
      },
    },
  },
  plugins: [],
};
