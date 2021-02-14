import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import PostList from './posts/PostList'
import PostCreate from './posts/PostCreate'
import PostEdit from './posts/PostEdit'
import UserList from './user/UserList'
import UserCreate from './user/UserCreate'
import UserEdit from './user/UserEdit'
import ConceptList from './concepts/ConceptList'
import ConceptCreate from './concepts/ConceptCreate'
import ConceptEdit from './concepts/ConceptEdit'
import QuestionList from './questions/QuestionList'
import QuestionCreate from './questions/QuestionCreate'
import QuestionEdit from './questions/QuestionEdit'


function AdminHome() {
  return <Admin dataProvider={restProvider('http://localhost:3000/')}>
    <Resource name='posts' list={PostList} create={PostCreate} edit={PostEdit} />
    <Resource name='users' list={UserList} create={UserCreate} edit={UserEdit} />
    <Resource name='concepts' list={ConceptList} create={ConceptCreate} edit={ConceptEdit} />
    <Resource name='questions' list={QuestionList} create={QuestionCreate} edit={QuestionEdit} />
  </Admin>
    ;
}

export default AdminHome;