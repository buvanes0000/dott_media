import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <NavLink to="/" className={styles.navbarLogo}>
          Dott Media
        </NavLink>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
          <li className={styles.navItem}>
            <NavLink
              to="/"
              className={({ isActive }) => 
                `${styles.navLinks} ${isActive ? styles.active : ''}`}
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to="/about"
              className={({ isActive }) => 
                `${styles.navLinks} ${isActive ? styles.active : ''}`}
              onClick={closeMenu}
            >
              About
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to="/services"
              className={({ isActive }) => 
                `${styles.navLinks} ${isActive ? styles.active : ''}`}
              onClick={closeMenu}
            >
              Services
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to="/contact"
              className={({ isActive }) => 
                `${styles.navLinks} ${isActive ? styles.active : ''}`}
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to="/blog"
              className={({ isActive }) => 
                `${styles.navLinks} ${isActive ? styles.active : ''}`}
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

