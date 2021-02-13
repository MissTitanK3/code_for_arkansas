import React from 'react'
import * as FaIcons from "react-icons/fa";
import { Card, CardWrapper, PrimaryBtn } from '../../Styles';

export default function GetInvolved() {
  return (
    <CardWrapper>
      <h2>Get Involved</h2>
      <ul>
        <li>
          <Card>
            <h3>Meetup&nbsp;&nbsp;&nbsp;<FaIcons.FaMeetup size='7em' /></h3>
            <p>Join us for our monthly meetings to get involved.</p>
            <PrimaryBtn>Sign up</PrimaryBtn>
          </Card>
        </li>
        <li>
          <Card>
            <h3>Slack&nbsp;&nbsp;&nbsp;<FaIcons.FaSlack size='7em' /></h3>
            <p>When you join Slack, introduce yourself.</p>
            <PrimaryBtn>Join</PrimaryBtn>
          </Card>
        </li>
        <li>
          <Card>
            <h3>Email&nbsp;&nbsp;&nbsp;<FaIcons.FaPaperPlane size='7em' /></h3>
            <p>Have some questions, send us an email.</p>
            <PrimaryBtn>Send Email</PrimaryBtn>
          </Card>
        </li>
      </ul>
    </CardWrapper>
  )
}
