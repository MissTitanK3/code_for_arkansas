import React from 'react'

export default function ContactForm() {
  return (
    <div>
      <form action="submit">
        <label>
          <p>Name: </p>
        </label>
        <input type="text" name="name" id="name" placeholder='Full Name' />
      </form>
    </div>
  )
}
