// src/Namebar.js
import React from 'react';
import { FaPhone, FaInstagram,FaFacebook } from 'react-icons/fa';
import styles from './Namebar.module.css';
import logo from '../assets/icon.png';

const Namebar = () => {
  return (
    <div className={styles.namebar}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={logo} alt="Dott Media" />
        <span className={styles.name}>Dott Media</span>
      </div>
      <div className={styles.contactContainer}>
        <a href="tel:+919360564513" className={styles.contactItem}>
          <FaPhone className={styles.icon} />
          <span className={styles.contactText}>+91 93605 64513</span>
        </a>
        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
          <FaInstagram className={styles.icon} />
          <span className={styles.contactText}>Instagram</span>
        </a>
        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
          <FaFacebook className={styles.icon} />
          <span className={styles.contactText}>FaceBook</span>
        </a>
      </div>
    </div>
  );
};

export default Namebar;
