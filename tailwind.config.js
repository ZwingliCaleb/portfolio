import daisyui from "daisyui";

module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js"
  ],
  theme: {
    extend: {
      fontFamily:{
        'josefin': ['"Josefin Sans"', 'sans-serif']
      },
    },
  },
  plugins: [
    daisyui,
  ],
}
