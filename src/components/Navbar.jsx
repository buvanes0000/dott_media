// src/Navbar.js
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import logo from '../assets/icon.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight * 0.9) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${isSticky ? styles.sticky : ''}`}>
      <div className={styles.navbarContainer}>
        <NavLink to="/" className={styles.navbarLogo}>
          <img className={styles.logo} src={logo} alt="Dott Media" />
        </NavLink>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
          <li className={styles.navItem}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${styles.navLinks} ${isActive ? styles.active : ''}`
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${styles.navLinks} ${isActive ? styles.active : ''}`
              }
              onClick={closeMenu}
            >
              About
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `${styles.navLinks} ${isActive ? styles.active : ''}`
              }
              onClick={closeMenu}
            >
              Services
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${styles.navLinks} ${isActive ? styles.active : ''}`
              }
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `${styles.navLinks} ${isActive ? styles.active : ''}`
              }
              onClick={closeMenu}
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
