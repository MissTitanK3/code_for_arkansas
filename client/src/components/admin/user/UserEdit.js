import React from 'react'
import { Edit, SimpleForm, TextInput, BooleanField } from 'react-admin'

const UserEdit = (props) => {
  return (
    <Edit title='Edit a Client' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='uName' />
        <TextInput source='uEmail' />
        <BooleanField source='uRole' />
      </SimpleForm>
    </Edit>
  )
}


export default UserEdit
