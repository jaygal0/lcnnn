import React from 'react'
import { SectionFlex } from '../styles'

const Footer = ({ footer }) => {
  return (
    <SectionFlex className={footer ? 'footer' : null}>
      <p>&copy; 2021 LCNNN. All rights reserved. Privacy Policy.</p>
      <p>
        Site built by{' '}
        <a href="https://joshuagalinato.com" target="_blank">
          Joshua Galinato
        </a>
      </p>
    </SectionFlex>
  )
}

export default Footer
