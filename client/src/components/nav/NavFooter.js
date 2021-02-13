import React from 'react'
import ContactForm from '../forms/ContactForm'
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import './Nav.css'

export default function NavFooter() {
  return (
    <div className='footer'>
      <p>Sitemap</p>
      <ul>
        <li>
          <Link>Meetup&nbsp;&nbsp;&nbsp;<FaIcons.FaMeetup size='2em' /></Link>
        </li>
        <li>
          <Link>Slack&nbsp;&nbsp;&nbsp;<FaIcons.FaSlack size='2em' /></Link>
        </li>
        <li>
          <Link>Email&nbsp;&nbsp;&nbsp;<FaIcons.FaPaperPlane size='2em' /></Link>
        </li>
      </ul>
      <ContactForm />
    </div>
  )
}
