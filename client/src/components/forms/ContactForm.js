import React from 'react'
import { PrimaryBtn } from '../../Styles'

export default function ContactForm() {
  return (
    <div className='contactForm'>
      <form action="submit">
        <div className='qTitle'>
          <h3>Have a question?</h3>
        </div>
        <div className='flexing'>
          <div>
            <label>
              <p>Name: </p>
            </label>
            <input type="text" name="name" id="name" placeholder='Full Name' />
            <label>
              <p>Email: </p>
            </label>
            <input type="email" name="email" id="email" placeholder='Email' />
            <label>
              <p>Subject: </p>
            </label>
            <input type="text" name="subject" id="subject" placeholder='Subject' />
          </div>
          <div>
            <label>
              <p>Message: </p>
            </label>
            <textarea name="text" id="text" cols="30" rows="10"></textarea>
          </div>
        </div>
        <div className='specBtn'>
          <PrimaryBtn >Submit</PrimaryBtn>
        </div>
      </form>
    </div>
  )
}
