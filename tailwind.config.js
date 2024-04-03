/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      "sm": "640px",
      "md": "768px",
      "lg": "960px",
      "xl": "1440px",
    },
    extend: {
      colors: {
        fondoprimary: {
          DEFAULT: "#ffffff",
          hover: "#ffffff",
        },
        fondosecondary: {
          DEFAULT: "#f8f8f8",
          hover: "#f8f8f8",
        },
        fondoterciary: {
          DEFAULT: "#000000",
          hover: "#000000",
        },
        primary: {
          DEFAULT: "#391eff",
          hover: "#391eff",
        },
        secondary: {
          DEFAULT: "#252734",
          hover: "#252734",
        },

        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
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
    },
  },
  plugins: [require("tailwindcss-animate")],
}