/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        footer: "#c6bac6",
        background: "#E5E3E3",
        about:"#f7e5e4",
        bk1: "#555d73",
        bk2: "#171e2f",
        button: "#e4e5eb",
      },
    },
  },
  plugins: [],
};
