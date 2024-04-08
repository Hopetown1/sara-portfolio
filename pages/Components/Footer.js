// Footer.js
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      
      <div className={styles.column}> 
        <h1 className={styles.h1}>© Sara Barcons</h1>
      </div>
      <div className={styles.column}>  
        <h1 className={styles.h1}>(+34) 622318871</h1>
        <h1 className={styles.h1}>sarabarcons@gmail.com</h1>
        <h1 className={styles.h1}>Instagram</h1>
        <h1 className={styles.h1}>LinkedIn</h1>
      </div>

    </footer>
  );
};

export default Footer;
