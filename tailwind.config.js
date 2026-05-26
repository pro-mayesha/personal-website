/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
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
        hand: ["var(--font-caveat)", "Caveat", "cursive"],
        garamond: ["var(--font-garamond)", "EB Garamond", "Georgia", "serif"],
        "serif-display": ["var(--font-garamond)", "Playfair Display", "Georgia", "serif"],
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
      boxShadow: {
        card: "6px 6px 0 rgba(155,46,32,0.13)",
        book: "8px 8px 0 rgba(155,46,32,0.18), 14px 18px 28px rgba(55,35,30,0.10)",
        button: "4px 4px 0 rgba(155,46,32,0.22)",
      },
      backgroundImage: {
        lines:
          "linear-gradient(to bottom, transparent 0, transparent 31px, rgba(204,66,44,0.16) 32px)",
        grid: "linear-gradient(to right, rgba(204,66,44,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(204,66,44,0.14) 1px, transparent 1px)",
      },
      backgroundSize: {
        lines: "100% 32px",
        grid: "28px 28px",
      },
    },
  },
  plugins: [],
};
