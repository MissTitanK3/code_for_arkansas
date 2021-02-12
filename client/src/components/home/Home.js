import React from 'react'
import Hero from '../hero/Hero'
import GetInvolved from '../getInvoved/GetInvolved'
import WhatWeDo from '../whatWeDo/WhatWeDo'
import { HomeWrapper } from '../../Styles'

export default function Home() {
  return (
    <HomeWrapper>
      <Hero />
      <WhatWeDo />
      <GetInvolved />
    </HomeWrapper>
  )
}
