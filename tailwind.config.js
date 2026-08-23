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
        paper: "#ffffff",
        paperSoft: "#ffffff",
        terracotta: "#cc422c",
        terracottaLight: "#e46a4c",
        terracottaDark: "#9b2e20",
        ink: "#1c1916",
        muted: "#6f675e",
        line: "#e6e0d6",
        note: "#fff4d6",
        cream: "#ffffff",
      },
      fontFamily: {
        display: ["var(--font-display)", "EB Garamond", "Georgia", "serif"],
        garamond: ["var(--font-garamond)", "EB Garamond", "Georgia", "serif"],
        article: ["var(--font-article)", "Source Serif 4", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Source Sans 3", "system-ui", "sans-serif"],
        hand: ["var(--font-garamond)", "EB Garamond", "Georgia", "serif"],
        "serif-display": ["var(--font-display)", "EB Garamond", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 1px 0 rgba(28,25,22,0.06)",
        book: "0 18px 40px -24px rgba(28,25,22,0.28)",
      },
    },
  },
  plugins: [],
};
