/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e40af",   // Customize for Athmate
        accent: "#f97316",    // Customize for Athmate
      },
    },
  },
  plugins: [],
}// Tailwind config placeholder
