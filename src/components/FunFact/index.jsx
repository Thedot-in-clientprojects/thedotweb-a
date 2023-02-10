import React, {useEffect} from 'react'
import Div from '../Div'
import './funfact.scss'

export default function FunFact({variant, title, subtitle, data}) {
  
  useEffect(() => {
    
  },[])
  

  return (
    
    <Div className={variant ? `cs-funfact_wrap ${variant}`: 'cs-funfact_wrap'}>
      {/* <Div className="cs-funfact_shape"  style={{backgroundImage: 'url(./images/funfact_shape_bg.svg)'}} /> */}
      
      
      <div className='mockup-video' style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "0 auto"}}>
      <video src="images/portfolio/mock.webm" style={{width: "400px"}} autoPlay loop muted  />
      </div>
    </Div>
  )
}
<video src="images/portfolio/mock.webm" style={{width: "200px", height: "500px"}} autoPlay="true" />
