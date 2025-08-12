module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,html}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0b6cf6',
        accent: '#7e5aff',
        slate: {
          900: '#0f1724',
          700: '#334155'
        }
      },
      spacing: {
        '72': '18rem',
      }
    },
    darkMode: 'class',
  },
  plugins: [],
}

