import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <nav>
        <Link to="/" target="_blank">Home</Link>
        <Link to="/about" target="_blank">About</Link>
      </nav></>
  );
}
export default Header;