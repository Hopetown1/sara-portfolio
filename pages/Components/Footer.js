// Footer.js
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      
      <div className={styles.column}> 
        <h1 className={styles.links}>© Sara Barcons</h1>
      </div>
      <div className={styles.column}>  
        <h1 className={styles.links}>(+34) 622318871</h1>
        <a href="mailto:sarabarcons@gmail.com" className={styles.links}>sarabarcons@gmail.com</a> 
        <a href="https://www.instagram.com/sarabarcons/" target="_blank" className={styles.links}>Instagram</a>
        <a href="https://www.linkedin.com/in/sara-barcons-810239223/" target="_blank" className={styles.links}>LinkedIn</a>
      </div>

    </footer>
  );
};

export default Footer;
