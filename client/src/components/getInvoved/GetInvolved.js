import React from 'react'
import * as FaIcons from "react-icons/fa";
import { Card, CardWrapper, PrimaryBtn } from '../../Styles';

const joinSlack = () => {
  const url = 'https://join.slack.com/t/code-for-little-rock/shared_invite/zt-ly8pn6as-7G~dyhxIjHywUNoNGKa5mw'
  window.open(url, '_blank')
}

const joinMeetUp = () => {
  const url = 'https://www.meetup.com/code-for-little-rock/'
  window.open(url, '_blank')
}

export default function GetInvolved() {
  return (
    <CardWrapper>
      <h2>Get Involved</h2>
      <ul>
        <li>
          <Card>
            <h3>Meetup&nbsp;&nbsp;&nbsp;<FaIcons.FaMeetup size='7em' /></h3>
            <p>Join us for our monthly meetings to get involved.</p>
            <PrimaryBtn onClick={joinMeetUp}>Sign up</PrimaryBtn>
          </Card>
        </li>
        <li>
          <Card>
            <h3>Slack&nbsp;&nbsp;&nbsp;<FaIcons.FaSlack size='7em' /></h3>
            <p>When you join Slack, introduce yourself.</p>
            <PrimaryBtn onClick={joinSlack} >Join</PrimaryBtn>
          </Card>
        </li>
        <li>
          <Card>
            {/* TODO Get Email */}
            <h3>Email&nbsp;&nbsp;&nbsp;<FaIcons.FaPaperPlane size='7em' /></h3>
            <p>Have some questions, send us an email.</p>
            <PrimaryBtn>Send Email</PrimaryBtn>
          </Card>
        </li>
      </ul>
    </CardWrapper>
  )
}
