import React from 'react'
import { Edit, SimpleForm, TextInput, BooleanField } from 'react-admin'

const UserEdit = (props) => {
  return (
    <Edit title='Edit a User' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='userName' />
        <TextInput source='userEmail' />
        <BooleanField source='userRole' />
      </SimpleForm>
    </Edit>
  )
}


export default UserEdit
