/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        titillium: ['Titillium Web', 'sans-serif'],
      },
      colors: {
        conduit: {
          green: '#5CB85C',
          darkGreen: '#3d8b3b',
          tag: '#aaa',
          lightenGray: '#ddd',
          gray: '#bbb',
          darkestGray: '#373a3c',
          darkenGray: '#999',
        },
      },
      spacing: {
        navItem: '0.425rem',
        0.3: '0.3rem',
        0.2: '0.2rem',
        tag: '0.6rem',
      },
      boxShadow: {
        banner:
          'inset 0 8px 8px -8px rgb(0 0 0 / 30%), inset 0 -8px 8px -8px rgb(0 0 0 / 30%)',
      },
      dropShadow: {
        logo: '0px 1px 3px rgb(0 0 0 / 30%)',
      },
      fontSize: {
        date: '0.8rem',
        articleBody: '1.2rem',
        articleTitle: '2.8rem',
        logo: '3.5rem',
      },
      borderRadius: {
        buttonSm: '0.2rem',
        tag: '10rem',
      },
    },
  },
  plugins: [],
};
