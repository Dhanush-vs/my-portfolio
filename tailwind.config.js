/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#05070A",
        ink: "#0B0F16",
        panel: "#0E131C",
        line: "#1C2430",
        signal: "#5FE0C7",
        current: "#7C9CFF",
        ember: "#E0A05F",
        mist: "#8A96A8",
        paper: "#E8ECF3",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(124,156,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(124,156,255,0.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
