import React from 'react'
import { CardWrapper, FormWrapper, PrimaryBtn } from '../../Styles'

export default function ProjectForm() {
  return (
    <CardWrapper>
      <h2>Do you wanna build a...</h2>
      <FormWrapper>
        <form action="submit" method="post">
          <label>... Project Concept</label>
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
