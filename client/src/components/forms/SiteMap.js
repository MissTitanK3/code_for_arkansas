import React from 'react'
import { Link } from 'react-router-dom'
import { SiteMapWrapper } from '../../Styles'

export default function SiteMap() {
  return (
    <SiteMapWrapper>
      <ul>
        <li><Link to='/'>Code For America</Link></li>
        <li><Link to='/'>Local Resources</Link></li>
        <li><Link to='/'>National Resources</Link></li>
      </ul>
    </SiteMapWrapper>
  )
}
