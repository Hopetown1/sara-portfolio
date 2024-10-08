// Footer.js
import {client} from '../../sanity/lib/client';
import React, {useEffect, useState} from 'react';
import styles from './Footer.module.css';
const Footer = () => {

  const [saraInfo, setSaraInfo] = useState(null);
  const [appearance, setAppearance] = useState(null);
  useEffect(() => {
    // Fetch the documents in the `sara_info` dataset
    client
    .fetch('*[_type == "sara_info"]')
    .then((data) => {
      setSaraInfo(data[0]);
      // console.log('saraInfo:', data[0])
    })
    .catch(console.error);
    
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
        {/* Conditional Rendering */}
        {saraInfo && ( 
          <div className={styles.column}>
            <h1 className={styles.links}>{saraInfo.phone}</h1>
            <a href={`mailto:${saraInfo.email}`} className={styles.links_green}>{saraInfo.email}</a> 
            <a href={saraInfo.instagram} target="_blank" className={styles.links_green}>Instagram</a>
            <a href={saraInfo.linkedin} target="_blank" className={styles.links_green}>LinkedIn</a>
          </div>
        )}
    </footer>
  );
};
export default Footer;

// import {client} from '../client../sanity/lib/' // Adjust the path if necessary
