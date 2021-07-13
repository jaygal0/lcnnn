// Place desktop font-size here
const deskH1 = 7.2
const deskH2 = 4
const deskH3 = 2.4
const deskH4 = 2.4
const body = 1.6
const meta = 5

// Place phone font-size here
const phoneH1 = 6.4
const phoneH2 = 4
const phoneH3 = 2.4
const phoneH4 = 2.4

export default {
  color: {
    yellow: '#EAED45',
    orange: '#ED8B45',
    lightGreen: '#68C4B8',
    black: '#1C1C1C',
    white: '#FFFFFF',
    grey: '#F5F5F5',
    line: '#E5E5E5',
  },
  font: {
    desktop: {
      h1: `${deskH1}rem`,
      h2: `${deskH2}rem`,
      h3: `${deskH3}rem`,
      h4: `${deskH4}rem`,
      p: `${body}rem`,
      meta: `${meta}rem`,
    },
    phone: {
      h1: `${phoneH1}rem`,
      h2: `${phoneH2}rem`,
      h3: `${phoneH3}rem`,
      h4: `${phoneH4}rem`,
    },
  },
  lineHeight: {
    desktop: {
      h1: `${deskH1 + 0.8}rem`,
      h2: `${deskH2 + 0.8}rem`,
      h3: `${deskH3 + 0.8}rem`,
      h4: `${deskH4 + 0.8}rem`,
      p: `${body + 0.8}rem`,
      meta: `${meta + 0.4}rem`,
    },
    phone: {
      h1: `${phoneH1 + 0.8}rem`,
      h2: `${phoneH2 + 0.8}rem`,
      h3: `${phoneH3 + 0.8}rem`,
      h4: `${phoneH4 + 0.8}rem`,
    },
  },
  letterSpacing: {
    p: '0.05rem',
  },
  transition: {},
  margin: {
      large: '6.4rem',
      medium: '3.2rem',
      small: '1.6rem',
    },
  borderRadius: '1.6rem',
  breakPoint: {
    desktop4K: '2561px',
    desktopLarge: '1441px',
    desktopSmall: '1024px',
    tablet: '768px',
    phoneLarge: '426px',
    phoneMedium: '376px',
    phoneSmall: '321px',
  },
}