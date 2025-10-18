module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f72ff',
        accent: '#06b6d4',
        'neutral-dark': '#0f172a'
      },
      borderRadius: {
        'xl-2': '18px'
      }
    }
  },
  plugins: []
}
