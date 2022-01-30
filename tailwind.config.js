// eslint-disable-next-line no-undef
module.exports = {
  important: true,
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      title: ['Montserrat', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu']
    },
    extend: {
      spacing: {
        'drop-down': '79%'
      },
      colors: {
        'electric-yellow': '#fff744',
        white: '#eee8d5',
        brwhite: '#fdf6e3',
        brblack: '#002b36',
        black: '#073642',
        brgreen: '#586e75',
        bryellow: '#657b83',
        brblue: '#839496',
        brcyan: '#93a1a1'
      },
      backgroundImage: {
        'tknieza-background': "url('/src/bg.svg')"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
