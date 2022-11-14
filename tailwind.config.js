/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        "colors": {
          "primary": {
            "50": "#d254ab",
            "100": "#c84aa1",
            "200": "#be4097",
            "300": "#b4368d",
            "400": "#aa2c83",
            "500": "#a02279",
            "600": "#96186f",
            "700": "#8c0e65",
            "800": "#82045b",
            "900": "#780051"
          },
          "secondary": {
            "500": "#1D1D1E"
          }
        }
    },
  },
  plugins: [],
}