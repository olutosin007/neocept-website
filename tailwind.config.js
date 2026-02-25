
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        navy: '#0F1B35',
        gold: '#C9A84C',
        'neo-blue': '#1764ae',
        cream: '#F8F5EF',
        'light-blue': '#EEF4FB',
        'deep-dark': '#080E1C',
      },
      fontFamily: {
        display: ['DM Serif Display', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-2': '0.2em',
      },
    },
  },
  plugins: [],
}
