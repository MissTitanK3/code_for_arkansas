import React from 'react'
import { List, Datagrid, TextField, DateField, EmailField, EditButton, DeleteButton } from 'react-admin'

const Userlist = (props) => {
  return <List {...props}>
    <Datagrid>
      <TextField source='id' />
      <TextField source='uRole' />
      <TextField source='uName' />
      <EmailField source='uEmail' />
      <DateField source='joined' />
      <EditButton basePath='./user' />
      <DeleteButton basePath='./user' />
    </Datagrid>
  </List>
}

export default Userlist
