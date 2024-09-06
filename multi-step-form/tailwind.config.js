/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        p: {
          "marine-blue": "hsl(var(--p-marine-blue))",
          "purplish-blue": "hsl(var(--p-purplish-blue))",
          "pastel-blue": "hsl(var(--p-pastel-blue))",
          "light-blue": "hsl(var(--p-light-blue))",
          "strawberry-red": "hsl(var(--p-strawberry-red))",
          "cool-gray": "hsl(var(--p-cool-gray))",
          "light-gray": "hsl(var(--p-light-gray))",
          magnolia: "hsl(var(--p-magnolia))",
          alabaster: "hsl(var(--p-alabaster))",
          white: "hsl(var(--p-white))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
