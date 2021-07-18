import React from 'react'
import ButtonMainAlt from './ButtonMainAlt'

const TextAndBtnAlt = ({ title, body, btnLabel, ahref, subheading }) => {
  return (
    <div>
      <h2>{title}</h2>
      {subheading ? <h3>{subheading}</h3> : null}
      <p>{body}</p>
      <ButtonMainAlt btnLabel={btnLabel} link={ahref} />
    </div>
  )
}

export default TextAndBtnAlt
