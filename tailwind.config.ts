export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#132b3d',
        teal: '#6fb7b1',
        ivory: '#f8f5f0',
        sand: '#e9dfd0',
        stone: '#f2efe9',
        accent: '#d9efe9',
        text: '#17314a',
      },
      boxShadow: {
        soft: '0 20px 45px rgba(19, 43, 61, 0.08)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
