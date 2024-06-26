/**
 * Section component that displays Sara's portfolio section.
 * @module Section
 */

import React, { useState, useEffect} from 'react';
import {client} from '../../sanity/lib/client';
import classNames from 'classnames';

import styles from './Section.module.css';
import ProjectDetails from './ProjectDetails';
import { set } from 'sanity';

/**
 * Section component that displays Sara's portfolio section.
 * @returns {JSX.Element} The JSX element representing the Section component.
 */
const Section = () => {
    // Define state variables for selected project, visibility of Sara's info, and project list
    const [selectedProject, setSelectedProject] = useState(null);
    const [showSaraInfo, setShowSaraInfo] = useState(false);
    const [projectListVisible, setProjectListVisible] = useState(false); 

    const [saraInfo, setSaraInfo] = useState(null);
    const [projectsData, setProjectsData] = useState([]);
    const [appearance, setAppearance] = useState(null);

    const column2Ref = React.useRef(null);

    React.useEffect(() => {
      if (column2Ref.current) {
        column2Ref.current.scrollTop = 0;
      }
    }, [selectedProject]);

    useEffect(() => {
      // Fetch the documents in the `sara_info` dataset
      client
      .fetch('*[_type == "sara_info"]')
      .then((data) => {
        setSaraInfo(data[0]);
      })
      .catch(console.error);

      // Fetch the documents in the `projects` dataset
      client
      .fetch('*[_type == "project"] | order(order asc)')
      .then((data) => {
        setProjectsData(data);
      }) 
      .catch(console.error)

      // Fetch the documents in the `appearance` dataset
      client
      .fetch('*[_type == "appearance"]')
      .then((data) => {
        setAppearance(data[0]);
        document.documentElement.style.setProperty('--appearance-highlight-color', data[0].highlight_color);
        document.documentElement.style.setProperty('--appearance-font-size', data[0].font_size + 'px' );
        document.documentElement.style.setProperty('--appearance-background-color', data[0].background_color);
      })
      .catch(console.error);
    }, []);

    /**
     * Handles click events on Sara's info.
     */
    const handleSaraInfoClick = () => {
      setShowSaraInfo(true);
      setSelectedProject(null);
      setProjectListVisible(false);
    };

    /**
     * Handles click events on a project.
     * @param {Object} project - The selected project.
     */
    const handleProjectClick = (project) => {
      setShowSaraInfo(false);
      setSelectedProject(project);
      setProjectListVisible(false);
    };

    /**
     * Handles click events on the circle.
     */
    const handleCircleClick = () => {
      setShowSaraInfo(false);
      setSelectedProject(null);
      setProjectListVisible(true);
      // console.log('projectListVisible:', projectListVisible);
    };

    return (
      <section className={styles.section}>
        {!projectListVisible && <div className={styles.green_circle} onClick={handleCircleClick}></div> }
        <div className={styles.column_1}> 
          <h1 className={classNames(styles.h1, { [styles.faded]: showSaraInfo})} onClick={() => handleSaraInfoClick()}>Sara Barcons </h1> 
          <div className={`${styles.projectList} ${projectListVisible ? styles.show : ''}`}>
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
        <div className={styles.column_2} ref={column2Ref}>  
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

