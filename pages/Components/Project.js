import React, { useState } from 'react';
import styles from './Project.module.css';

const Project = ({ title, brand, date }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <article className={styles.project} 
    onClick={() => setSelectedProject(project)}  
    >
      <p className={styles.p}>{title} | {brand} | {date}</p>
    </article>
  );
};

export default Project;
