import React from 'react'
import { Link } from 'react-router-dom'
import { SiteMapWrapper } from '../../Styles'

const joinCFA = () => {
  const url = 'https://www.codeforamerica.org'
  window.open(url, '_blank')
}
const LocalRes = () => {
  const url = 'https://portal.arkansas.gov'
  window.open(url, '_blank')
}
const usRes = () => {
  const url = 'https://www.usa.gov'
  window.open(url, '_blank')
}

export default function SiteMap() {
  return (
    <SiteMapWrapper>
      <ul>
        <li><Link to='/' onClick={joinCFA}>Code For America</Link></li>
        <li><Link to='/' onClick={LocalRes}>Local Resources</Link></li>
        <li><Link to='/' onClick={usRes}>National Resources</Link></li>
      </ul>
    </SiteMapWrapper>
  )
}
