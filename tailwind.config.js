module.exports = {
  content: ['./src/index.html'],
  theme: {
    extend: {
      backgroundImage: {
        page: "url('../img/bg.jpg')",
      },
      screens: {
        'print': { 'raw': 'print' },
      }
    },
  },
  plugins: [],
}
