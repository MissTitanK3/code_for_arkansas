import React from 'react'
import { Create, SimpleForm, TextInput, DateInput, RadioButtonGroupInput } from 'react-admin'



const UserCreate = (props) => {
  const choices = [
    { id: 'Admin', name: 'Admin' },
    { id: 'Mentor', name: 'Mentor' },
    { id: 'Engineer', name: 'Engineer' },
    { id: 'Developer', name: 'Developer' },
    { id: 'Member', name: 'Member' }
  ]
  return (
    <Create title='Create a User' {...props}>
      <SimpleForm>
        <TextInput source='userName' />
        <TextInput source='userEmail' />
        <DateInput label='Joined' source='joined' />
        <RadioButtonGroupInput source="userRole" choices={choices} />
      </SimpleForm>
    </Create>
  )
}


export default UserCreate
