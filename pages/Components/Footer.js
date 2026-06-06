// Footer.js
import React from 'react';
import styles from './Footer.module.css';
import { usePortfolio } from '@/context/PortfolioContext';
const Footer = () => {

  const { saraInfo, appearance } = usePortfolio();
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
