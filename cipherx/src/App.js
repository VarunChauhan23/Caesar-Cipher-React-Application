import React, { useState } from 'react';
import Navbar from './components/Navbar.js';
import Body from './components/Body.js';
import './App.css';

function App() {
  const [mode, setMode] = useState('light');

  const togglemode = ()=> {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
  }

  return(
    <>
    <Navbar mode = {mode} togglemode = {togglemode}></Navbar>
    <Body mode = {mode}></Body>
    </>
  );
}

export default App;
