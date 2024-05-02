
// ProjectDetails.js
import React from 'react';
import styles from './ProjectDetails.module.css';
import imageUrlBuilder from '@sanity/image-url'
import {client} from '../../sanity/lib/client' // Adjust the path if necessary

const builder = imageUrlBuilder(client)

const ProjectDetails = ({ project }) => {
  if (!project) {
    return <div>Nothing Currently Selected </div>;
   } 
    console.log("Images Array:", project.images); // Log the data
  return (
    <div className={styles.column_wrapper}>
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
<div className={styles.imageContainer}>
    {project.images.map((image, index) => {
         const imageUrl = builder.image(image.image).url() // Generate the URL for the image

         return (
            // eslint-disable-next-line @next/next/no-img-element
            <img
               src={imageUrl}
               alt={project.title}
               key={image._key}
               className={
                  image.layout === "stacked" 
                     ? styles.stackedImage 
                     : styles.twoPerRowImage 
               }
            />
         )
    })}
</div>
</div> 
  );
};

export default ProjectDetails;