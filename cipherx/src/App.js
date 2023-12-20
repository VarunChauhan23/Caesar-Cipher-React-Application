import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Body from './components/Body.js';
import Alert from './components/Alert.js';
import About from './components/AboutMe.js';
import './App.css';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showalert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const togglemode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light Mode has been enabled", "success");
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showalert("Dark Mode has been enabled", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <Routes>
            <Route path='/src/components/AboutMe.js' element={<About mode={mode} />}/>
            <Route path='/' element={<Body showalert={showalert} mode={mode} />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
