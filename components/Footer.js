import Link from 'next/link'
import React from 'react'
import { SectionFlex } from '../styles'
import moment from 'moment'
import CookieConsent from 'react-cookie-consent'

const Footer = ({ footer }) => {
  return (
    <SectionFlex className={footer ? 'footer' : null}>
      <p>
        &copy; {moment().format('Y')} LCNNN. All rights reserved.{' '}
        <Link href="/privacy-policy">Privacy Policy</Link>
      </p>
      {/* FIXME: Create a Privacy policy page*/}
      <p>
        Site built by{' '}
        <a href="https://joshuagalinato.com" target="_blank">
          Joshua Galinato
        </a>
      </p>
      <CookieConsent
        cookieName="letschatnownownow"
        disableStyles={true}
        expires={30}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </SectionFlex>
  )
}

export default Footer
