/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lucida: ["Lucida Grande New", "sans-serif"],
        vietnam: ["Be Vietnam Pro", "sans-serif"],
        sans: ["DM Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
        spaceMono: ["Space Mono", "monospace"],
        poppins: ["Poppins", "sans-serif"],
        nunito: ["Nunito Sans", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      screens: {
        vsm: "400px",
        xmd: "800px",
      },
    },
  },
  plugins: [],
};
