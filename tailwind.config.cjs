/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        exo: "'Exo 2', sans-serif",
      },
      backgroundImage: {
        world: `url('https://www.seekpng.com/png/full/26-267804_world-map-high-quality-png-public-health-world.png')`
      },
      dropShadow: {
        gold: '0 0 30px rgba(209, 153, 21, 0.5)',
        moon: '0 0 30px rgba(182, 195, 217, 0.5)'
      }
    },
  },
  plugins: [],
};
