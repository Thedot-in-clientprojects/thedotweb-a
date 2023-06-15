import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import Div from '../Div';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <a href='https://www.linkedin.com/in/thedot-tech/' className="cs-center">
        <Icon icon="fa6-brands:linkedin-in" />
      </a>
      <a href='https://www.instagram.com/thedot_tech/' className="cs-center">
        <Icon icon="fa6-brands:instagram" />               
      </a>
      <a href='https://www.behance.net/thedot-in' className="cs-center">
        <Icon icon="fa6-brands:behance" />              
      </a>
      <a href= 'https://twitter.com/theDot_tech' className="cs-center">
        <Icon icon="fa6-brands:twitter" />
      </a>
    </Div>
  )
}
