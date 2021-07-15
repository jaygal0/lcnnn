import React from 'react'
import styled from 'styled-components'
import ButtonMain from './ButtonMain'

const TextAndBtn = ({ title, body, btnLabel, link }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{body}</p>
      <ButtonMain btnLabel={btnLabel} link={link} />
    </>
  )
}

export default TextAndBtn
