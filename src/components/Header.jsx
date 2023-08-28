// Header.jsx

import React from 'react';
import './Header.css'; // Import the CSS for styling

const Header = () => {
  return (
    <header >
      <div className="logo">
        <img src="/images/icon.png" alt="icon" />
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
