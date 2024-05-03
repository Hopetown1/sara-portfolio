
// ProjectDetails.js


// Create an instance of the image URL builder using the Sanity client
const builder = imageUrlBuilder(client)

// Define the ProjectDetails component
const ProjectDetails = ({ project }) => {
   // Check if a project is selected
   if (!project) {
      return <div>Nothing Currently Selected </div>;
   } 

   // Render the project details
   return (
      <div className={styles.column_wrapper}>
         {/* Render the first text block */}
         {project.text_1 && ( 
            <BlockContent 
               className={styles.text_1} // Add className prop with styles.text_1
               blocks={project.text_1} 
               projectId="lspp38nx" 
               dataset="sara_info"
               style={{ 
                  marginTop: 'calc(7vh + 18px)',
                  padding: 0,
                  marginBottom: 0 ,
                  display: 'block'
                }}
            /> 
         )}

         {/* Render the second line of text */}
         {project.text_2_line1 && ( 
            <p className={styles.text_2_line1}>
               {project.text_2_line1}
            </p> 
         )}

         {/* Render the third line of text */}
         {project.text_2_line2 && ( 
            <p className={styles.text_2_line2}>
               {project.text_2_line2}
            </p> 
         )}

         {/* Render the fourth line of text */}
         {project.text_2_line3 && ( 
            <p className={styles.text_2_line3}>
               {project.text_2_line3}
            </p> 
         )}

         {/* Render the image container */}
         <div className={styles.imageContainer}>
            {/* Map through the images and render each one */}
            {project.images && project.images.map((image, index) => {
               // Generate the URL for the image
               const imageUrl = builder.image(image.image).url()
               return (
                  // Render the image element
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                     src={imageUrl}
                     alt={project.title}
                     key={image._key}
                     className={
                        // Set the appropriate CSS class based on the image layout
                        image.layout === "stacked" 
                           ? styles.stackedImage 
                           : image.layout === "two per row"
                              ? styles.twoPerRowImage
                              : styles.threePerRowImage
                     }
                  />
               )
            })}
         </div>
      </div> 
   );
};

// Export the ProjectDetails component as the default export
export default ProjectDetails;
import React from 'react';
import styles from './ProjectDetails.module.css';
import imageUrlBuilder from '@sanity/image-url'
import {client} from '../../sanity/lib/client' // Adjust the path if necessary
import BlockContent from '@sanity/block-content-to-react';
// 