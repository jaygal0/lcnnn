import React from 'react'
import ButtonMain from './ButtonMain'
import ButtonMainScroll from './ButtonMainScroll'

const TextAndBtn = ({ title, body, btnLabel, link, subheading, scroll }) => {
  return (
    <div>
      <h2>{title}</h2>
      {subheading ? <h3>{subheading}</h3> : null}
      <p>{body}</p>
      {scroll == true ? (
        <ButtonMainScroll btnLabel={btnLabel} />
      ) : (
        <ButtonMain btnLabel={btnLabel} link={link} />
      )}
    </div>
  )
}

export default TextAndBtn
