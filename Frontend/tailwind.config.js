/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#064749',
        secondary: '#14171A',
        accent: '#657786',
        background: '#F5F8FA',
        border: '#E1E8ED',
      },
    },
  },
  plugins: [],
}

