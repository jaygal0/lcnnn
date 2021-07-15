import styled from 'styled-components'

export const SectionGrid = styled.section`
  grid-column: 2 / span 10;
  height: min-content;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(2, min-content);
  column-gap: 1.6rem;
  margin-bottom: ${({ theme }) => theme.verticleRythmn.desktop};

  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.phoneMedium}) {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1.6rem;
    margin: 0 1.6rem;
  }
`
export const SectionFlex = styled.section`
  grid-column: 2 / span 10;
  height: min-content;
  display: flex;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.phoneMedium}) {
  }
`
