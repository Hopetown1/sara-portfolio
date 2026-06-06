// ProjectDetails.js
import React from 'react';
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '../../sanity/lib/client'; // Adjust the path if necessary
import BlockContent from '@sanity/block-content-to-react';
import styles from './ProjectDetails.module.css';

// Create an instance of the image URL builder using the Sanity client
const builder = imageUrlBuilder(client);

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
                  marginBottom: 0,
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
            {project.images && project.images.map((mediaItem) => {
               // Handle both the new `media` (file) field and the legacy `image` field.
               const mediaSource = mediaItem.media || mediaItem.image;
               const asset = mediaSource?.asset;

               // The asset is dereferenced in the GROQ query, so we have the direct
               // url, mime type, blur placeholder (lqip) and intrinsic dimensions.
               const mimeType = asset?.mimeType || '';
               const lqip = asset?.metadata?.lqip;
               const dimensions = asset?.metadata?.dimensions;

               // Decide the real media kind by mime type. Note: images can live in
               // the file field (sanity.fileAsset, e.g. a .png) or the legacy image
               // field (sanity.imageAsset) — only the latter carries lqip/dimensions.
               const isLegacyImage = mediaSource?._type === 'image';
               const isVideo = mimeType.startsWith('video/');
               const isImage = isLegacyImage || mimeType.startsWith('image/');

               if (!isVideo && !isImage) {
                  console.error('Unrenderable media source:', mediaSource?._type, mimeType);
                  return null;
               }

               // Legacy image assets go through the image pipeline (supports blur and
               // resizing); file assets (videos, or pngs uploaded as files) use the
               // direct asset url.
               const mediaUrl = isLegacyImage ? builder.image(mediaSource).url() : asset?.url;

               if (!mediaUrl) {
                  return null;
               }

               const className =
                  mediaItem.layout === "stacked"
                     ? styles.stackedImage
                     : mediaItem.layout === "two per row"
                        ? styles.twoPerRowImage
                        : styles.threePerRowImage;

               return (
                  <div key={mediaItem._key} className={className}>
                     {isVideo ? (
                        <video
                           autoPlay
                           loop
                           muted
                           playsInline
                           style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                        >
                           <source src={mediaUrl} type={mimeType || 'video/mp4'} />
                        </video>
                     ) : dimensions ? (
                        // Image asset with known dimensions: optimize + blur-up.
                        <Image
                           src={mediaUrl}
                           alt={project.title}
                           width={dimensions.width}
                           height={dimensions.height}
                           sizes="(max-width: 768px) 100vw, 50vw"
                           placeholder={lqip ? 'blur' : 'empty'}
                           blurDataURL={lqip || undefined}
                           style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                     ) : (
                        // File-stored image (no dimensions/blur metadata): lazy-load
                        // at natural aspect ratio to avoid distortion.
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                           src={mediaUrl}
                           alt={project.title}
                           loading="lazy"
                           decoding="async"
                           style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                     )}
                  </div>
               );
            })}

         </div>
      </div>
   );
};

// Export the ProjectDetails component as the default export
export default ProjectDetails;
