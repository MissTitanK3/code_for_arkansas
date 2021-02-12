import React from 'react'
import * as FaIcons from "react-icons/fa";
import { Card, CardWrapper, FormWrapper, PrimaryBtn } from '../../Styles';

export default function GetInvolved() {
  return (
    <CardWrapper>
      <h1>Get Involved</h1>
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
      <FormWrapper>
        <form action="submit" method="post">
          <label>Submit Your Project Concept</label>
          <input type="text" placeholder='Full Name' />
          <label>Full Name</label>
          <input type="email" placeholder='Email' />
          <label>Email</label>
          <input type="tel" placeholder='Phone Number' />
          <label>What is your idea?</label>
          <textarea name='Your Idea' rows='10' cols='30' placeholder='What is your idea?'></textarea>
          <PrimaryBtn type="submit">Submit</PrimaryBtn>
        </form>
      </FormWrapper>
    </CardWrapper>
  )
}
