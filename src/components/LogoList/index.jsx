import React from 'react'
import Div from '../Div'
import './logolist.scss'

export default function LogoList() {
  const partnerLogos = [
    {
      src: '/images/icons/anna.png', 
      alt:'Partner'
    },
    {
      src: '/images/icons/h.png', 
      alt:'Partner'
    },
    {
      src: '/images/icons/bangs.png', 
      alt:'Partner'
    },
    {
      src: 'images/icons/ice.png', 
      alt:'Partner'
    },
    {
      src: 'images/icons/deaf.png', 
      alt:'Partner'
    }
  ]
  return (
    <Div className="cs-partner_logo_wrap">
      {partnerLogos.map((partnerLogo, index)=><div className="cs-partner_logo" key={index}><img src={partnerLogo.src} alt={partnerLogo.alt} /></div>)}
    </Div>
  )
}
