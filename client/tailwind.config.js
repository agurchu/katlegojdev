/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      secondary: "#404040",
      primary: "#00e9aa",
    },
    extend: {
      gridTemplateColumns: {
        footer: "minmax(300px, 350px) 1fr",
      },
    },
  },
  plugins: [],
};
