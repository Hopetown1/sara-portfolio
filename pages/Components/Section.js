// Section.js
import React, { useState } from 'react';

import styles from './Section.module.css';
import ProjectDetails from './ProjectDetails'; // Assuming your new component


const projectsData = [
    {
      title: "Niko",
      brand: "Identity",
      date: "2023",
      text_1: "Brand identity and custom typography for Niko, a new punk burger restaurant by Chef Sharon Cohen. The rebellious and exaggerated essence   of the restaurant is communicated through a bold and bespoke typeface, Niko Display, that is accompanied of a system of funky illustrations of the dishes.",
      text_2_line1: "In collaboration with Ark Branding",
      text_2_line2: "Photography by Haim Yosef",
      images: [
        {src:"Niko/Niko Motion Black.gif", layout: "stacked"},
        {src:"Niko/Niko Sara Barcons.gif", layout: "stacked"},
        {src:"Niko/Niko.gif", layout: "two per row"},
        {src:"Niko/Niko Post 2.png", layout: "two per row"},
        {src:"public/Niko/Niko 3 Post.png", layout: "stacked"}
      ]
    },
    {
      title: "IDA de ADI",
      brand: "Campaign",
      date: "2023",
    },
    {
      title: "Piérdete en Chicago",
      brand: "Campaign",
      date: "2023",
    },
    {
      title: "Types per Minute",
      brand: "Typeface",
      date: "2023",
    },
    {
      title: "Roam",
      brand: "Identity",
      date: "2023",
    },
    {
      title: "Mikro",
      brand: "Typeface",
      date: "2022",
    },
    {
      title: "Unter der Erde",
      brand: "Editorial",
      date: "2022",
    },
    {
      title: "Bloc a Bloc",
      brand: "Exhibition",
      date: "2022",
    },
    {
      title: "Bleach, please",
      brand: "Editorial",
      date: "2022",
    },
    {
      title: "Make Your Own Salt",
      brand: "Campaign",
      date: "2022",
    },
    {
      title: "MUO (Museo Urbano)",
      brand: "Art Direction",
      date: "2021",
    },
    {
      title: "Vertigo",
      brand: "Typeface",
      date: "2021",
    },
    {
      title: "Lost Privacy",
      brand: "Exhibition",
      date: "2021",
    },
  ];
  

  
const Section = () => {
    const [selectedProject, setSelectedProject] = useState(null);

  return (
    
    <section className={styles.section}>
      
      <div className={styles.column_1}> 

      <h1 className={styles.h1}>Sara Barcons</h1> 


      <div className={styles.projectList}>
       
          {projectsData.map((project) => (
            <ul className={styles.projectItem} key={project.title} onClick={() => { 
              setSelectedProject(project);
              console.log(selectedProject); 
          }}>
            <article className={styles.project} onClick={() => console.log("selected Project title:", project.title)}>
            <p className={styles.p}>{project.title} | {project.brand} | {project.date}</p>
            </article>
            </ul>
  
          ))}
        </div>
      </div>


      <div className={styles.column_2}>  
     
      <ProjectDetails project={selectedProject} />

      </div>

    </section>
  );
};

export default Section;
