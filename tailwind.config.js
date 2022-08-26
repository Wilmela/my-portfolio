module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'Roboto', 'sans-serif'],
      },

      colors: {
        // blue: '#2589BD',
        blue: '#2389cf',
        blackColor: '#0C120C',
        ashColor: '#C7D6D5',
        primary: '#00040f',
        primary2: 'rgba(0,0,0,0.9)',
        secondary: '#fff',
        secondary2: '#00f6ff',
        dimWhite: 'rgba(255, 255, 255, 0.7)',
      },
      screens: {
        xs: '320px',
        sm: '480px',
        md: '620px',
        lg: '768px',
        xl: '1050px',
        xxl: '1240px',
      },
    },
  },
  plugins: [],
};
