import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import PostList from './posts/PostList'
import PostCreate from './posts/PostCreate'
import PostEdit from './posts/PostEdit'
import UserList from './user/UserList'
import UserCreate from './user/UserCreate'
import UserEdit from './user/UserEdit'


function AdminHome() {
  return <Admin dataProvider={restProvider('http://localhost:3000')}>
    <Resource name='posts' list={PostList} create={PostCreate} edit={PostEdit} />
    <Resource name='users' list={UserList} create={UserCreate} edit={UserEdit} />
    <Resource name='concepts' list={UserList} create={UserCreate} edit={UserEdit} />
    <Resource name='questions' list={UserList} create={UserCreate} edit={UserEdit} />
  </Admin>
    ;
}

export default AdminHome;