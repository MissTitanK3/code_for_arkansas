import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin'

const ConceptEdit = (props) => {
  return (
    <Edit title='Edit a Concept' {...props}>
      <SimpleForm>
        <TextInput source='fullName' />
        <TextInput source='email' />
        <TextInput source='subject' />
        <TextInput multiline source='message' />
      </SimpleForm>
    </Edit>
  )
}


export default ConceptEdit
