/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fea928",
      },
      container: { center: true, padding: { default: "1rem" } },
    },
  },
  plugins: [],
};
