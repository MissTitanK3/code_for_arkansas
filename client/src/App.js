import React from 'react'
import './App.css';

import Nav from './components/nav/Nav'
import NavFooter from './components/nav/NavFooter';

export default function App() {
  return (
    <div className='App'>
      <Nav />
      <NavFooter />
    </div>
  );
}
