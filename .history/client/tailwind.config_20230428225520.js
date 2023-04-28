/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/client/src')",
        "footer-texture":
          "linear-gradient(to bottom right, rgba(0,0,0,0.8), rgba(0,0,0,0.8)),url('/client/src/assets/helsinki-cathedral.jpg)",
      },
    },
  },
  plugins: [],
};
