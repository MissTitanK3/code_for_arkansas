import React from 'react'
import { Create, SimpleForm, TextInput } from 'react-admin'

const ConceptCreate = (props) => {
  return (
    <Create title='Create a Concept' {...props}>
      <SimpleForm>
        <TextInput source='fullName' />
        <TextInput source='email' />
        <TextInput source='subject' />
        <TextInput multiline source='message' />
      </SimpleForm>
    </Create>
  )
}


export default ConceptCreate
