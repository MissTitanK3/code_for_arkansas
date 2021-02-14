import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

const UserCreate = (props) => {
  return (
    <Create title='Create a User' {...props}>
      <SimpleForm>
        <TextInput source='uRole' />
        <TextInput source='uName' />
        <TextInput source='uEmail' />
        <DateInput label='Joined' source='joined' />
      </SimpleForm>
    </Create>
  )
}


export default UserCreate
