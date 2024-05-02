// Footer.js
import React, {useEffect, useState} from 'react';
import styles from './Footer.module.css';
import {client} from '../../sanity/lib/client' // Adjust the path if necessary

const Footer = () => {

  const [saraInfo, setSaraInfo] = useState(null);

  const [appearance, setAppearance] = useState(null);
  useEffect(() => {
    // Fetch the documents in the `sara_info` dataset
    client
    .fetch('*[_type == "sara_info"]')
    .then((data) => {
      setSaraInfo(data[0]);
    })
    .catch(console.error);
    // console.log('saraInfo:', saraInfo)
    // Fetch the documents in the `projects` dataset
    
    client
    .fetch('*[_type == "appearance"]')
    .then((data) => {
      // console.log('Fetched appearance data:', data);
      setAppearance(data[0]);
    })
    .catch(console.error);
  }, []);
  return (
    <footer className={styles.footer} style={{ fontSize: appearance && appearance.font_size }}>
      
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
