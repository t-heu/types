import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-json-server';

//import { PostList, PostEdit, PostCreate, PostIcon } from './posts';

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource name="posts" />
    </Admin>
  );
}

export default App;

