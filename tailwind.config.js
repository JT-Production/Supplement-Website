/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Syne", "sans-serif"],
        monts: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
        "6xl": "3.92rem",
      },
      // screens: {
      //   xs: '378px',
      //   // sm: '480px',
      //   // md: '768px',
      //   // lg: '976px',
      //   // xl: '1440px',
      // },
    },
    plugins: [],
  },
};
