import React, {useState} from 'react';
import Navbar from './components/Navbar.js';
import Body from './components/Body.js';
import './App.css';

export default function app() {
  return(
    <>
    <Navbar></Navbar>
    <Body></Body>
    </>
  );
}
