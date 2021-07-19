import React from 'react'
import Head from 'next/head'

const Meta = ({ title, desc }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/logo.svg" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Open+Sans:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <meta name="description" content={desc} />
      <meta name="robots" content="index, follow" />
    </Head>
  )
}

export default Meta
