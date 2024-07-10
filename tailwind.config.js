/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Fonte: ['MinhaFonte', 'sans-serif'],
        FonteBold: ['MinhaFonteBold', 'sans-serif'],
      },
      colors: {
        customLaranja: '#FF7A00',
        customLaranjahover: '#B25500',
        customAzul: '#1A9FC4',
        customAzulhover: '#005E78',
        customAzulButton: '#61DAFB',
        customAzulfundo: '#1A9FC4',
        customOrange: '#FDE0C6',
        customSpam: '#61DAFB',
      },
      borderRadius: {
        'custom': '12px',
      },
    },
  },
  plugins: [],
}
