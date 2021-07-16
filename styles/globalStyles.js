import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html,
body {
  font-family: 'Open Sans', sans-serif;
  font-size: 62.5%;
  font-weight: 400;
  letter-spacing: 0.05rem;
  background-color: ${({ theme }) => theme.color.offWhite};
  background-image: url(blob-1.svg), url(blob-2.svg);
  background-position: 100% 40vw, 100% 232vw;
  background-repeat: no-repeat;
}

header {
  max-width: 144rem;
  height: min-content;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 1.6rem;

  @media screen and (max-width: ${({ theme }) =>
    theme.breakPoint.phoneMedium}) {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1.6rem;
    margin: 0 1.6rem;
  }
}
nav {
  margin: 5.6rem 0 8.8rem 0;
}
main {
  max-width: 144rem;
  height: min-content;
  margin: 0 3.2rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 1.6rem;

  @media screen and (max-width: ${({ theme }) =>
    theme.breakPoint.phoneMedium}) {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1.6rem;
    margin: 0 1.6rem;
  }
}
footer {
  max-width: 144rem;
  height: min-content;
  margin: 0 3.2rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 1.6rem;
}

h1 {
  font-family: 'Archivo Black', sans-serif;
  font-size: ${({ theme }) => theme.font.desktop.h1};
  line-height: ${({ theme }) => theme.lineHeight.desktop.h1};
  color: ${({ theme }) => theme.color.black};
  text-transform: capitalize;
  font-weight: 900;
  margin-bottom: ${({ theme }) => theme.margin.small};

  @media screen and (max-width: ${({ theme }) =>
    theme.breakPoint.phoneMedium}) {
  font-size: ${({ theme }) => theme.font.phone.h1};
  line-height: ${({ theme }) => theme.lineHeight.phone.h1};
  }
}
 
h2 {
  font-family: 'Archivo Black', sans-serif;
  font-size: ${({ theme }) => theme.font.desktop.h2};
  line-height: ${({ theme }) => theme.lineHeight.desktop.h2};
  text-transform: capitalize;
  color: ${({ theme }) => theme.color.black};
  font-weight: 400;
  margin-bottom: ${({ theme }) => theme.margin.small};
  
  @media screen and (max-width: ${({ theme }) =>
    theme.breakPoint.phoneMedium}) {
  font-size: ${({ theme }) => theme.font.phone.h2};
  line-height: ${({ theme }) => theme.lineHeight.phone.h2};
  }
}

h3 {
  font-family: 'Archivo Black', sans-serif;
    font-size: ${({ theme }) => theme.font.desktop.h3};
    line-height: ${({ theme }) => theme.lineHeight.desktop.h3};
    color: ${({ theme }) => theme.color.black};
    text-transform: capitalize;
    font-weight: 900;
  margin-bottom: ${({ theme }) => theme.margin.small};

  @media screen and (max-width: ${({ theme }) =>
    theme.breakPoint.phoneMedium}) {
  font-size: ${({ theme }) => theme.font.phone.h3};
  line-height: ${({ theme }) => theme.lineHeight.phone.h3};
  }
}

h4 {
  font-family: 'Archivo Black', sans-serif;
  font-size: ${({ theme }) => theme.font.desktop.h4};
  line-height: ${({ theme }) => theme.lineHeight.desktop.h4};
  margin-bottom: ${({ theme }) => theme.margin.small};
  margin-bottom: 1.6rem;
  color: ${({ theme }) => theme.color.black};
  font-weight: 700;
  text-transform: capitalize;
}

p {
  font-size: ${({ theme }) => theme.font.body};
  line-height: ${({ theme }) => theme.lineHeight.body};
  margin-bottom: ${({ theme }) => theme.margin.small};
}

button {
  font-family: 'Archivo Black', sans-serif;
  font-size: ${({ theme }) => theme.font.button};
  line-height: ${({ theme }) => theme.lineHeight.button};
  text-transform: capitalize;
  border: none;
}

a {
  color: ${({ theme }) => theme.color.black};
  text-decoration: underline;

  &:hover {
  color: ${({ theme }) => theme.color.hotPink};
  transition: ${({ theme }) => theme.transition.fast};
  cursor: pointer;
  }
}

blockquote {
  background: ${({ theme }) => theme.color.grey};
  padding: 2.4rem;
  margin-bottom: 2.4rem;
}

blockquote p {
  margin-bottom: 1.6rem;
}

ul {
  display: flex;
  align-items: center;
}

li {
font-size: ${({ theme }) => theme.font.body};
line-height: ${({ theme }) => theme.lineHeight.body};
list-style: none;
font-family: 'Archivo Black', sans-serif;
text-transform: capitalize;

&.nav {

  &:hover {
    cursor: pointer;
  }
}

&.active {
    text-decoration: none;
    border-bottom: ${({ theme }) => theme.color.hotPink} solid 4px;
    padding-bottom: 4px;
}

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    list-style: none;
      }
}
li:not(:last-child){
  margin-right: 8rem;
}
// FORMS
label {
font-size: ${({ theme }) => theme.font.body};
line-height: ${({ theme }) => theme.lineHeight.body};
font-weight: bold;
text-transform: capitalize;
margin-bottom: ${({ theme }) => theme.margin.small};
}

input {
  margin-bottom: ${({ theme }) => theme.margin.medium};
  background-color: ${({ theme }) => theme.color.offWhite};
  padding: .8rem;
  width: 100%;
  outline: 0;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.black};

::-webkit-input-placeholder {
  color: black;
  opacity: .3;
  }
  
  &:focus {
  border-bottom: 1px solid ${({ theme }) => theme.color.hotPink};
  transition: ${({ theme }) => theme.transition.fast}
  }
}

textarea {
  font-family: 'Open Sans', sans-serif;
  background-color: ${({ theme }) => theme.color.offWhite};
  padding: .8rem;
  outline: 0;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.black};
  margin-bottom: ${({ theme }) => theme.margin.medium};
  resize: none;

::-webkit-input-placeholder {
  color: black;
  opacity: .3;
  font-family: 'Open Sans', sans-serif;
  }
  
  &:focus {
  border-bottom: 1px solid ${({ theme }) => theme.color.hotPink};
  transition: ${({ theme }) => theme.transition.fast}
  }
}

// BACKGROUND SVG'S
.blob-1 {
  position: absolute;
  top: 0;
  z-index: 1;
}

.blob-2 {
  position: absolute;
  z-index: -1;
}

// CSS FOR AUDIO PLAYER 
// Background
.rhap_container {
  background: ${({ theme }) => theme.color.blue};
  border-radius: ${({ theme }) => theme.borderRadius.small};
}
// Remove additional controls
.rhap_additional-controls {
  display: none;
}
// Play button 
.rhap_play-pause-button {
  color: ${({ theme }) => theme.color.grey};
}
// Volume button 
.rhap_volume-button {
  color: ${({ theme }) => theme.color.grey};
}
// Circle play indicator
.rhap_progress-indicator {
  background-color: ${({ theme }) => theme.color.hotPink};
}
.rhap_volume-indicator {
  background-color: ${({ theme }) => theme.color.hotPink};
}
.rhap_progress-filled {
  background-color: ${({ theme }) => theme.color.hotPink};
}
.rhap_progress-bar-show-download {
  background-color: ${({ theme }) => theme.color.grey};
}
.rhap_total-time {
  display: none;
}
.rhap_current-time {
  color: ${({ theme }) => theme.color.white};
  margin-left: 1.6rem;
}
`

export default GlobalStyle
