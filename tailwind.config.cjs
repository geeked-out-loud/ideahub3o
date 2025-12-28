const theme = require('./src/lib/theme.cjs');
const colors = require('tailwindcss/colors');

module.exports = {
  // permanent dark styling — the site itself will be designed dark-first
  darkMode: false,
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: theme.paleMoss,
        lavender: theme.lavender,
        teal: theme.paleMoss,
        dustyBlue: theme.dustyBlue,
        warmSand: theme.warmSand,
        mutedRose: theme.mutedRose,
        graphite: theme.graphite,
      },
      boxShadow: {
        'soft-md': '0 6px 18px rgba(2,6,23,0.45)',
      },
    },
  },
  plugins: [],
};
