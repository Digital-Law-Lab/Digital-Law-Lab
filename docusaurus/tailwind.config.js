/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'twcss-',
  important: '#useTailwindcss',
  corePlugins: {
    preflight: false, // disable Tailwind's reset
  },
  content: ['./src/**/*.{js,jsx,ts,tsx}', './docs/**/*.mdx', './blog/**/*.mdx'],
  darkMode: ['class', '[data-theme="dark"]'], // hooks into docusaurus' dark mode settigns
  theme: {
    extend: {},
  },
  plugins: [],
};
