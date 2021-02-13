import React from 'react'
import Hero from '../hero/Hero'
import GetInvolved from '../getInvoved/GetInvolved'
import WhatWeDo from '../whatWeDo/WhatWeDo'
import { HomeWrapper } from '../../Styles'
import ProjectForm from '../forms/ProjectForm'

export default function Home() {
  return (
    <HomeWrapper>
      <Hero />
      <WhatWeDo />
      <GetInvolved />
      <ProjectForm />
    </HomeWrapper>
  )
}
