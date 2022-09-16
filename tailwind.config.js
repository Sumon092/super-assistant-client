module.exports = {
  content: ["./src/**/*.{index.html,js}"],
  theme: {
    mytheme: {

      "primary": "#f9c0f8",

      "secondary": "#ba3248",

      "accent": "#6fdd40",

      "neutral": "#161622",

      "base-100": "#EDE5F0",

      "info": "#6DDBF3",

      "success": "#23D7AD",

      "warning": "#F38A12",

      "error": "#EB2438",
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
