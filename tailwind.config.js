/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f6efe3",
        paperSoft: "#fff8ef",
        terracotta: "#cc422c",
        terracottaDark: "#9b2e20",
        ink: "#37231e",
        muted: "#917b72",
        line: "#e9b2a2",
        note: "#fff0b8",
        cream: "#f5ebe7",
      },
      fontFamily: {
        hand: ["Caveat", "cursive"],
        garamond: ["EB Garamond", "Georgia", "serif"],
        "serif-display": ["Playfair Display", "Georgia", "serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
