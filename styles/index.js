import styled from 'styled-components'

export const SectionGrid = styled.section`
  grid-column: 2 / span 10;
  height: min-content;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(2, min-content);
  column-gap: 1.6rem;
  margin-bottom: ${({ theme }) => theme.verticleRythmn.desktop};

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    grid-column: 1 / -1;
  }
`
export const SectionFlex = styled.section`
  grid-column: 3 / span 8;
  height: min-content;
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.verticleRythmn.desktop};

  &.footer {
    grid-column: 2 / span 10;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
      grid-column: 1 / -1;
    }

    @media screen and (max-width: ${({ theme }) =>
        theme.breakPoint.phoneMedium}) {
      flex-direction: column;
    }
  }

  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.phoneMedium}) {
    grid-column: 1 / -1;
  }
`

export const Heading = styled.h2`
  grid-column: 2 / -1;
  grid-row: 1;
  margin-bottom: ${({ theme }) => theme.margin.medium};

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    grid-column: 1 / -1;
  }
`
