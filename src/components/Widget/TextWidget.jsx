import React from 'react'
import Div from '../Div'

export default function TextWidget({logoSrc, logoAlt, text}) {
  return (
    <Div className="cs-text_widget">
      <img style={{width: "150px"}} src={logoSrc} alt={logoAlt} />
      <p>{text}</p>
    </Div>
  )
}
