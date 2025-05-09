/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
      colors: {
        blacktext: "var(--blacktext)",

        mint: {
          50: "var(--mint-50)",
          100: "var(--mint-100)",
          200: "var(--mint-200)",
          300: "var(--mint-300)",
          400: "var(--mint-400)",
          500: "var(--mint-500)",
          600: "var(--mint-600)",
          700: "var(--mint-700)",
          800: "var(--mint-800)",
          900: "var(--mint-900)",
          950: "var(--mint-950)",
        },
        riptide: {
          50: "var(--riptide-50)",
          100: "var(--riptide-100)",
          200: "var(--riptide-200)",
          300: "var(--riptide-300)",
          400: "var(--riptide-400)",
          500: "var(--riptide-500)",
          600: "var(--riptide-600)",
          700: "var(--riptide-700)",
          800: "var(--riptide-800)",
          900: "var(--riptide-900)",
          950: "var(--riptide-950)",
        },
      },
    },
  },
  plugins: [],
};

