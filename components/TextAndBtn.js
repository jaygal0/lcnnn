import React from 'react'
import ButtonMain from './ButtonMain'

const TextAndBtn = ({ title, body, btnLabel, link, subheading, href }) => {
  return (
    <div>
      <h2>{title}</h2>
      {subheading ? <h3>{subheading}</h3> : null}
      <p>{body}</p>
      <ButtonMain btnLabel={btnLabel} link={link} />
    </div>
  )
}

export default TextAndBtn
