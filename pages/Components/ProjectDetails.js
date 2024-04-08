// ProjectDetails.js
import React from 'react';
import styles from './ProjectDetails.module.css';

const ProjectDetails = ({ project }) => {
  if (!project) {
    return <div>Please select a project</div>;
  }

  return (
    <div>
  {project.text_1 && ( 
     <p className={styles.text_1}>{project.text_1}</p> 
  )}
  {project.text_2_line1 && ( 
     <p className={styles.text_2_line1}>
       {project.text_2_line1}
     </p> 
  )}
  {project.text_2_line2 && ( 
     <p className={styles.text_2_line2}>
    {project.text_2_line2}
     </p> 
  )}
  {project.text_2_line3 && ( 
     <p className={styles.text_2_line3}>
    {project.text_2_line3}
     </p> 
  )}
  {/* Image rendering ... */}
</div> 
  );
};

export default ProjectDetails;