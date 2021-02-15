import React from 'react'
import ContactForm from '../forms/ContactForm'
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import './Nav.css'
import SiteMap from '../forms/SiteMap';

const joinSlack = () => {
  const url = 'https://join.slack.com/t/code-for-little-rock/shared_invite/zt-ly8pn6as-7G~dyhxIjHywUNoNGKa5mw'
  window.open(url, '_blank')
}

const joinMeetUp = () => {
  const url = 'https://www.meetup.com/code-for-little-rock/'
  window.open(url, '_blank')
}


export default function NavFooter() {
  return (
    <div className='footer'>
      <SiteMap />
      <ul>
        <li>
          <Link to='/' onClick={joinMeetUp}>Meetup&nbsp;&nbsp;&nbsp;<FaIcons.FaMeetup size='2em' /></Link>
        </li>
        <li>
          <Link to='/' onClick={joinSlack}>Slack&nbsp;&nbsp;&nbsp;<FaIcons.FaSlack size='2em' /></Link>
        </li>
        <li>
          {/* TODO Get Email */}
          <Link to='/'>Email&nbsp;&nbsp;&nbsp;<FaIcons.FaPaperPlane size='2em' /></Link>
        </li>
      </ul>
      <ContactForm />
    </div>
  )
}
