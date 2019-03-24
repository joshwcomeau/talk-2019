import createTheme from '../../createTheme'

export const colors = {
  primary: 'white',
  secondary: '#19181F', // almost black w/ blueish tint
  tertiary: '#6FA0FF', // Light blue
  quaternary: '#CECECE', // pale gray
}

const theme = createTheme(
  colors,
  {
    primary: 'Oswald',
    secondary: 'Merriweather',
  },
  {
    components: {
      heading: {
        h1: {
          fontSize: '4rem',
          textTransform: 'uppercase',
        },
        h2: {
          fontSize: '3.5rem',
          textTransform: 'uppercase',
        },
        h3: {
          fontSize: '3rem',
          textTransform: 'uppercase',
        },
        h4: {
          fontSize: '2.5rem',
          textTransform: 'uppercase',
        },
        h5: {
          fontSize: '2rem',
          textTransform: 'uppercase',
        },
        h6: {
          fontSize: '1.5rem',
          textTransform: 'uppercase',
        },
      },
      codePane: {
        fontSize: '2rem',
      },
    },
  }
)

export default theme
