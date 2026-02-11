
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Nasalization', 'Arial Black', 'sans-serif'],
        'body': ['Ubuntu', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        imo: {
          deep: "#0D0221",
          navy: "#150535",
          ocean: "#7B2FBE",
          wave: "#9B59D0",
          sky: "#C77DFF",
          foam: "#E0AAFF",
          sand: "#FFF0F5",
          coral: "#FF6EC7",       // hot pink
          teal: "#00D4FF",        // electric blue
          green: "#39FF14",       // matrix green
          neon: "#FF6EC7",        // hot pink = основной акцент
          magenta: "#FF00FF",     // чистый маджента
          lime: "#00D4FF",        // electric blue как второй акцент
        },
      },
      boxShadow: {
        'brutal': '0 0 20px rgba(255, 110, 199, 0.3), 0 0 40px rgba(255, 110, 199, 0.1)',
        'brutal-sm': '0 0 12px rgba(255, 110, 199, 0.2)',
        'brutal-white': '0 0 20px rgba(255, 255, 255, 0.1)',
        'brutal-coral': '0 0 20px rgba(255, 110, 199, 0.3)',
        'brutal-lime': '0 0 20px rgba(0, 212, 255, 0.3)',
        'neon-glow': '0 0 30px rgba(255, 110, 199, 0.4), 0 0 60px rgba(255, 110, 199, 0.15)',
        'neon-glow-sm': '0 0 15px rgba(255, 110, 199, 0.2)',
      },
      backgroundImage: {
        'gradient-ocean': 'linear-gradient(135deg, #0D0221 0%, #150535 50%, #7B2FBE 100%)',
        'gradient-hero': 'linear-gradient(180deg, #0D0221 0%, #150535 40%, #2D1066 100%)',
        'gradient-neon': 'linear-gradient(135deg, #FF6EC7 0%, #7B2FBE 50%, #00D4FF 100%)',
      },
      borderRadius: {
        'brutal': '0',
        'brutal-tl': '0',
        'brutal-br': '0',
      },
    },
  },
  plugins: [
    plugin(function({ addVariant, addUtilities }) {
      addVariant('light', '.light &');
      addUtilities({
        '.brutal-border': {
          border: '1px solid rgba(255, 110, 199, 0.15)',
        },
        '.brutal-border-neon': {
          border: '1px solid rgba(255, 110, 199, 0.3)',
        },
        '.brutal-border-coral': {
          border: '1px solid rgba(255, 110, 199, 0.25)',
        },
      });
    }),
  ],
};
