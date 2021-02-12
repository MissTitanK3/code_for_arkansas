import React from 'react'

import { HeroWrapper, PrimaryBtn } from '../../Styles'
import AR from '../../img/arkansas.jpg'

export default function Hero() {
  return (
    <HeroWrapper>
      <div className="text">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis assumenda temporibus laboriosam natus reprehenderit esse, nobis consequatur veniam placeat quisquam rerum odit dignissimos illum. Dolores asperiores veritatis delectus quidem. Magnam?
      </p>
        <PrimaryBtn>Contact Us</PrimaryBtn>
      </div>
      <div className="graphic">
        <img src={AR} alt="" />
      </div>
    </HeroWrapper>
  )
}
