/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/client/src/assets/helsinki-cathedral.jpg)",
      },
    },
  },
  plugins: [],
};
