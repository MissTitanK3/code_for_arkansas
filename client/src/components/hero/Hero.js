import React from 'react'

import { HeroWrapper, PrimaryBtn } from '../../Styles'
import AR from '../../img/arkansas.jpg'

export default function Hero() {
  return (
    <HeroWrapper>
      <div className="text">
        <p>
          We intend this to be a portal for Arkansans to find the technology and reach they need to have a greater range to those who need it. We will provide resources for community organizers and non-profit organizations.
      </p>
        <PrimaryBtn>Contact Us</PrimaryBtn>
      </div>
      <div className="graphic">
        <img src={AR} alt="" />
      </div>
    </HeroWrapper>
  )
}
