
// ProjectDetails.js
import Image from 'next/image';

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

         {/* Render the media container */}
         <div className={styles.imageContainer}>
            {/* Map through the media and render each one */}
            {project.images && project.images.map((mediaItem, index) => {
               // Handle both old (image) and new (media) data structures
               const mediaSource = mediaItem.media || mediaItem.image;
               
               // Check if it's a video or image based on the _type
               const isVideo = mediaSource?._type === 'file';
               const isImage = mediaSource?._type === 'image';
               
               // Generate the URL for the media
               let mediaUrl;
               if (isVideo) {
                  // For videos, construct the URL directly
                  const fileRef = mediaSource.asset._ref;
                  const fileId = fileRef.replace('file-', '').replace('-mp4', '');
                  mediaUrl = `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${fileId}.mp4`;
               } else if (isImage) {
                  // For images, use the builder
                  mediaUrl = builder.image(mediaSource).url();
               } else {
                  console.error('Invalid media source type:', mediaSource?._type);
                  return null; // Skip this item
               }
               
               return (
                  <div
                     key={mediaItem._key}
                     className={
                        // Set the appropriate CSS class based on the media layout
                        mediaItem.layout === "stacked" 
                           ? styles.stackedImage 
                           : mediaItem.layout === "two per row"
                              ? styles.twoPerRowImage
                              : styles.threePerRowImage
                     }
                  >
                     {isVideo ? (
                        <video
                           autoPlay
                           loop
                           muted
                           playsInline
                           style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                        >
                           <source src={mediaUrl} type="video/mp4" />
                        </video>
                     ) : (
                        <Image
                           src={mediaUrl}
                           style={{ height: '100%', width: '100%' }}
                           alt={project.title}
                           sizes='(max-width: 600px) 500px, 100vw'
                           strategy="responsive"
                           width={400}
                           height={400}
                        />
                     )}
                  </div>
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