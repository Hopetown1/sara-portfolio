// Section.js
import React, { useState } from 'react';

import styles from './Section.module.css';
import Project from './Project';


const projectsData = [
    {
      title: "Niko",
      brand: "Identity",
      date: "2023",
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


      <ul className={styles.projectList}>
       
          {projectsData.map((project) => (
            <Project key={project.title} {...project} 
            
            />
        
          ))}
        </ul>
      </div>


      <div className={styles.column_2}>  
     
   </div>

    </section>
  );
};

export default Section;
