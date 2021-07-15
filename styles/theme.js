// General fonts
const subtitle = 3.2;
const body = 1.6;
const meta = 1.2;
const button = 1.6;

// Place desktop font-size here
const deskH1 = 9.6;
const deskH2 = 3.2;
const deskH3 = 2.4;
const deskH4 = 1.6;

// Place phone font-size here
const phoneH1 = 5.6;
const phoneH2 = 3.2;
const phoneH3 = 2.4;
const phoneH4 = 1.6;

export default {
  color: {
    brown: '#EC9487',
    blue: '#315D7E',
    hotPink: '#D56FA6',
    black: '#0E0E2C',
    offWhite: '#FFF9ED',
    white: '#FFFFFF',
  },
  font: {
    body: `${body}rem`,
    subtitle: `${subtitle}rem`,
    meta: `${meta}rem`,
    button: `${button}rem`,
    desktop: {
      h1: `${deskH1}rem`,
      h2: `${deskH2}rem`,
      h3: `${deskH3}rem`,
      h4: `${deskH4}rem`,
    },
    phone: {
      h1: `${phoneH1}rem`,
      h2: `${phoneH2}rem`,
      h3: `${phoneH3}rem`,
      h4: `${phoneH4}rem`,
    },
  },
  lineHeight: {
    body: `${body + 0.8}rem`,
    subtitle: `${subtitle + 0.8}rem`,
    meta: `${meta + 0.8}rem`,
    button: `${button + 0.8}rem`,
    desktop: {
      h1: `${deskH1 + 0.8}rem`,
      h2: `${deskH2 + 0.8}rem`,
      h3: `${deskH3 + 0.8}rem`,
      h4: `${deskH4 + 0.8}rem`,
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
  verticleRythmn: {
    desktop: '12.8rem',
    tablet: '9.6rem',
    phone: '9.6rem',
  },
  borderRadius: '.5rem',
  breakPoint: {
    desktop4K: '2561px',
    desktopLarge: '1441px',
    desktopSmall: '1024px',
    tablet: '768px',
    phoneLarge: '426px',
    phoneMedium: '376px',
    phoneSmall: '321px',
  },
};
