/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'monocode': ['monocode', 'monospace'], // Add custom font to Tailwind
        'monocode_semibold': ['monocode_semibold', 'sans-serif'], // Add custom semibold font
      },
    },
  },
  plugins: [],
}

