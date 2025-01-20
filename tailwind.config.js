/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#168254", // green primary
        "brand-secondary": "#b0ebc8", // soft green secondary
        "brand-green": "#47c086", // medium green
        "brand-black": "#07261b", // hitam font
        "brand-white": "#eefbf3", // soft white font
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Mengganti default sans
        serif: ["Merriweather", "serif"], // Menambahkan untuk font serif
        mono: ["Fira Code", "monospace"], // Menambahkan untuk font monospaced
      },
    },
  },
  plugins: [],
};
