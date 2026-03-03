const { Background } = require('@tsparticles/engine');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",           // core – must have .jsx
    "./src/**/**/*.{js,jsx}",        // nested folders safety
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],

  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },

    extend: {
      // Extend – do NOT override the full slate palette
      colors: {
        slate: {
          1: '#020617',
          2: '#0f172a',
          3: '#1e293b',
        },
        primary: "#22d3ee",
        secondary: "#60a5fa",
        background: "#020617",
      },

      backdropBlur: {
        xs: "2px",
      },

      boxShadow: {
        glass: "0 4px 30px rgba(0, 0, 0, 0.1)",
        "soft-neo": "8px 8px 16px #0f172a, -8px -8px 16px #1e293b",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },

      gridTemplateColumns: {
        footer: "minmax(300px, 350px) 1fr",
      },
    },
  },

  plugins: [],
}