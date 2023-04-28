/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "linear-gradient(to bottom right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/src/assets/helsinki-cathedral.jpg')",
      },
    },
  },
  plugins: [],
};
