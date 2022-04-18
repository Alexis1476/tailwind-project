module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      fontFamily:{
        poppins: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}
// npx tailwindcss -i ./css/style.css -o ./dist/style.css --watch