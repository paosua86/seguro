module.exports = {
  content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media',
  theme: {
    screens: {
      'xs': '300px',
      'sm': '340px',
      'md': '600px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    minHeight: {
      '1/2': '50%',
    },
    extend: {
      colors: {
        'blue-base': '#006B6B',
        'blue-bright': '#00F7F7',
        'blue-medium': '#00B8B8',
        'blue-medium-dark': '#007878',
        'blue-dark': '#005252',
        'white-a': '#FFFFFF',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
