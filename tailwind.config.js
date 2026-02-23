/** Tailwind configuration for InkBix */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007BFF',
        magenta: '#FF2E63',
        yellow: '#FFC107',
        bgLight: '#F9FAFB',
        bgDark: '#1F2937'
      },
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
        heading: ['Poppins', 'ui-sans-serif']
      }
    }
  },
  plugins: [],
}
