/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        alert: ['Anton', 'sans-serif'],
        monospace: ['"Share Tech Mono"', 'monospace'],
      },
    }
  },
  plugins: [],
}
