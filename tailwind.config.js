/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          // text
        // (sub-heading at the top of the app UI)
        'PaleViolet': 'hsl(276, 100%, 81%)',
        //  (chat on the left)
        'ModerateViolet': 'hsl(276, 55%, 52%)',
        // (chat on the right)
        'DesaturatedDarkViolet': 'hsl(271, 15%, 43%)',
        // (placeholder text)
        'GrayishBlue': 'hsl(206, 6%, 79%)',
        // (main heading)
        'VeryDarkDesaturatedViolet': 'hsl(271, 36%, 24%)',
        // (paragraph)
        'DarkGrayishViolet': 'hsl(270, 7%, 64%)',
          // gadient
        'LightMagenta': 'hsl(293, 100%, 63%)',
        'LightViolet': 'hsl(264, 100%, 61%)',
          // second
        'White': 'hsl(0, 0%, 100%)',
        //  (app background)
        'LightGrayishViolet': 'hsl(270, 20%, 96%)',
        // (submit button background)
        'VeryDarkDesaturatedViolet': 'hsl(271, 36%, 24%)',
        // (radio button outline)
        'VeryLightMagenta': 'hsl(289, 100%, 72%)'
      }
    },
  },
  plugins: [],
}