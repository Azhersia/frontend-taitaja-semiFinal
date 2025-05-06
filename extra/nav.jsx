'use client';

import { useState } from 'react';
import './Navbar.css'; 
import Image from 'next/image'; 

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className='nav-logo-container'>
        <div className="nav-logo">Navbar template</div>
        <Image src={"/next.svg"} width={80} height={40} alt='logo'/>
        </div>
        <button
          className="nav-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}