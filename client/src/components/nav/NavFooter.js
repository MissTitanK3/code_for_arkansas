import React from 'react'
import ContactForm from '../forms/ContactForm'
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import './Nav.css'
import SiteMap from '../forms/SiteMap';

export default function NavFooter() {
  return (
    <div className='footer'>
      <SiteMap />
      <ul>
        <li>
          <Link to='/'>Meetup&nbsp;&nbsp;&nbsp;<FaIcons.FaMeetup size='2em' /></Link>
        </li>
        <li>
          <Link to='/'>Slack&nbsp;&nbsp;&nbsp;<FaIcons.FaSlack size='2em' /></Link>
        </li>
        <li>
          <Link to='/'>Email&nbsp;&nbsp;&nbsp;<FaIcons.FaPaperPlane size='2em' /></Link>
        </li>
      </ul>
      <ContactForm />
    </div>
  )
}
