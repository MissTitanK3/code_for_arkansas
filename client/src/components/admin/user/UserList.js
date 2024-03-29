import React from 'react'
import { List, Datagrid, TextField, DateField, EmailField, EditButton, DeleteButton } from 'react-admin'

const Userlist = (props) => {
  return <List {...props}>
    <Datagrid>
      <TextField source='id' />
      <TextField source='userRole' />
      <TextField source='userName' />
      <EmailField source='userEmail' />
      <DateField source='joined' />
      <EditButton basePath='./users' />
      <DeleteButton basePath='./users' />
    </Datagrid>
  </List>
}

export default Userlist

