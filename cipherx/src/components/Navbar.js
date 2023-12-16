import React from 'react';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark">
        <a className="navbar-brand" href="#home">
          <img src="logo.png" width="30" height="30" className="d-inline-block align-top" alt="Logo" />
          CipherX
        </a>
      </nav>
    </>
  );
}
