/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jomolhari: ["var(--font-Jomolhari)"],
        hammersmith: ["var(--font-Hammersmith-One)"],
        halant: ["var(--font-Halant)"],
        hanuman: ["var(--font-Hanuman)"],
        inter: ["var(--font-Inter)"],
        roboto: ["var(--font-Roboto)"],
        opensans: ["var(--font-Open-Sans)"],
        nunito: ["var(--font-Nunito)"],
      },
    },
  },
  plugins: [],
};
