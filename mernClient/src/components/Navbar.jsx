import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import {useAuth} from "../store/auth.jsx";
const Navbar = () => {
  const {isLoggedIn}=useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For menu toggle
  const handleScroll = () => {
    if (window.scrollY > 50) { // If scroll is more than 50px, change background color
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 // Toggle the mobile menu
 const toggleMenu = (event) => {
  event.stopPropagation(); // Prevent closing immediately
  setIsMenuOpen(!isMenuOpen);
};
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = document.querySelector('.navbar');
      if (navbar && !navbar.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

  // Listen for click events
  document.addEventListener('click', handleClickOutside);

  // Cleanup event listener on component unmount
  return () => {
    document.removeEventListener('click', handleClickOutside);
  };
}, []);
  return (
    
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="brand-logo">
        <Link to="/">ShubhGraphix</Link>
      </div>
        
      <nav>
        <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
          {isLoggedIn?(<li><Link to="/logout">Logout</Link></li>):(<><li className="dropdown">
            <Link className='navbar-account'>Account</Link>
            <ul className="dropdown-menu">
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </ul>
          </li></>)}
        </ul>
        
      </nav>
      {/* Hamburger Button for small screens */}
     <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
    </div>
   
  );
}

export default Navbar;
