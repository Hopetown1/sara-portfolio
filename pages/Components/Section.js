// Section.js
import React, { useState, useEffect} from 'react';
import {client} from '../../sanity/lib/client' // Adjust the path if necessary


import styles from './Section.module.css';
import ProjectDetails from './ProjectDetails'; // Assuming your new component




// Define the Section component
const Section = () => {
    // Define state variables for selected project, visibility of Sara's info, and project list
    const [selectedProject, setSelectedProject] = useState(null);
    const [showSaraInfo, setShowSaraInfo] = useState(false);
    const [projectListVisible, setProjectListVisible] = useState(false); 

    const [saraInfo, setSaraInfo] = useState(null);
    const [projectsData, setProjectsData] = useState([]);
    const [appearance, setAppearance] = useState(null);
    useEffect(() => {
      // Fetch the documents in the `sara_info` dataset
      client
      .fetch('*[_type == "sara_info"]')
      .then((data) => {
        setSaraInfo(data[0]);
      })
      .catch(console.error);
      // console.log('saraInfo:', saraInfo)
      // Fetch the documents in the `projects` dataset
      client
      .fetch('*[_type == "project"]')
      .then((data) => {
        setProjectsData(data);
      })
      .catch(console.error)
      // console.log('projectsData:', projectsData)
      // Fetch the documents in the `appearance` dataset
      client
      .fetch('*[_type == "appearance"]')
      .then((data) => {
        // console.log('Fetched appearance data:', data);
        setAppearance(data[0]);
      })
      .catch(console.error);
    }, []);

    // Define a function to handle click events on Sara's info
    const handleSaraInfoClick = () => {
      setShowSaraInfo(true); // Set visibility of Sara's info to true
      setSelectedProject(null); // Reset the selected project
    };

    // Define a function to handle click events on a project
    const handleProjectClick = (project) => {
      setShowSaraInfo(false); // Set visibility of Sara's info to false
      setSelectedProject(project); // Set the selected project
    };

    // Define a function to handle click events on the circle
    const handleCircleClick = () => {
      setProjectListVisible(!projectListVisible); // Tonpm uninstall tinacmsgle visibility of project list
      console.log('projectListVisible:', projectListVisible) // Log the current visibility state of project list
    };

    // Return the JSX to render for this component
    return (
      <section className={styles.section} style={{ fontSize: appearance && appearance.font_size }}>
        <div className={styles.green_circle} onClick={handleCircleClick}></div>
        <div className={styles.column_1}> 
          <h1 
            style={{ 
              color: showSaraInfo === true ? 'rgba(0, 0, 0, 0.4)' : ''
          }} 
            className={styles.h1} 
            onClick={() => handleSaraInfoClick()}>Sara Barcons
          </h1> 
          <div className={`${styles.projectList} ${projectListVisible ? 'show' : ''}`}>
            {projectsData.map((project) => (
              <ul className={styles.projectItem} key={project.title} onClick={() => handleProjectClick(project)}> 
                <article className={styles.project}>
                  <p 
                    style={{ color: selectedProject === project ? 'rgba(0, 0, 0, 0.4)' : '' }} 
                    className={styles.p}
                  > 
                    {project.title} | {project.brand} | {project.date}</p>
                </article>
              </ul>
            ))}
          </div>
        </div>
        <div className={styles.column_2}>  
          {showSaraInfo ? (
            <div>
              <p className={styles.text_1}>{saraInfo.text_1}</p>
              <p className={styles.text_2_line1}>{saraInfo.text_2_line1} </p>
              <p className={styles.text_2_line2}>{saraInfo.text_2_line2}</p>

            </div> 
          ) : (
            selectedProject && <ProjectDetails project={selectedProject} /> 
          )}
        </div>
      </section>
    );
};
export default Section;

