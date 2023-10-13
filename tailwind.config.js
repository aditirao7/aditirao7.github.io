/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/components/*.{html,js}"],
  theme: {
    extend: {
      colors: {},
      keyframes: {
        open: {
          "0%": {
            opacity: 1,
            transform: "translateX(100%)",
          },
        },
        close: {
          to: {
            opacity: 0,
            transform: "translateX(100%)",
          },
        },
        waving: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        hover: {
          "0%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(-8%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
      animation: {
        "waving-hand": "waving 2s linear infinite",
        "drone-hover": "hover 3s infinite",
      },
    },
  },
  plugins: [],
};
