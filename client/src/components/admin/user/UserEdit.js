import React from 'react'
import { Edit, SimpleForm, TextInput, RadioButtonGroupInput } from 'react-admin'

const UserEdit = (props) => {
  const choices = [
    { id: 'Admin', name: 'Admin' },
    { id: 'Mentor', name: 'Mentor' },
    { id: 'Engineer', name: 'Engineer' },
    { id: 'Developer', name: 'Developer' },
    { id: 'Member', name: 'Member' }
  ]

  return (
    <Edit title='Edit a User' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='userName' />
        <TextInput source='userEmail' />
        <RadioButtonGroupInput source="userRole" choices={choices} />
      </SimpleForm>
    </Edit>
  )
}


export default UserEdit
