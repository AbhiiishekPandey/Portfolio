/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        dark: "#000000", // Pitch black
        card: "#111111", // Dark grey for cards
        "neon-purple": "#a855f7",
        "electric-violet": "#7c3aed",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(124, 58, 237, 0.5)',
      }
    },
  },
  plugins: [],
}
