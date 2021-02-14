import React from 'react'
import { List, Datagrid, TextField, EmailField, EditButton, DeleteButton } from 'react-admin'

const Conceptlist = (props) => {
  return <List {...props}>
    <Datagrid>
      <TextField source='id' />
      <TextField source='fullName' />
      <TextField source='email' />
      <EmailField source='phoneNumber' />
      <EmailField multiline source='desc' />
      <EditButton basePath='./concept' />
      <DeleteButton basePath='./concept' />
    </Datagrid>
  </List>
}

export default Conceptlist

