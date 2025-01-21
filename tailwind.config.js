/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      colors: {
        "ciemny-zielony": "#003E30",
        "tekst-ciemny-zielony": "#566E68",
        "jasny-ciemny-zielen": "#C6D1CE",
        "tlo-jasne": "#FEFAF7",
        "tlo-ciemne": "#FAF6F2",
        "tlo-ciemne-2": "#F4F0EB",
        "neon-zielony": "#00E500",
        "neon-zielony-jasny": "#F1F9EB",
        "neon-zielony-jasny-2": "#D5F9D0",
      },
      fontFamily: {
        DMSans: ["DMSans", "serif"],
      },
    },
  },
  plugins: [],
};
