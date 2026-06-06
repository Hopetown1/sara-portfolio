/**
 * Section component that displays Sara's portfolio section.
 * @module Section
 */

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import classNames from 'classnames';

import styles from './Section.module.css';
import ProjectDetails from './ProjectDetails';
import { usePortfolio } from '@/context/PortfolioContext';
import { slugify } from '@/lib/slug';

/**
 * Section component that displays Sara's portfolio section.
 * The active project is driven by the URL (/projects/[slug]); clicking a
 * project navigates to its own page while the left-hand nav stays in place.
 * @returns {JSX.Element} The JSX element representing the Section component.
 */
const Section = () => {
  const router = useRouter();
  const { projects, saraInfo } = usePortfolio();

  const activeSlug = router.query.slug;
  const isHome = router.pathname === '/';
  const selectedProject = activeSlug
    ? projects.find((project) => slugify(project.title) === activeSlug)
    : null;

  // Whether the "about" text is shown (home page only) and whether the project
  // list is expanded on mobile.
  const [showSaraInfo, setShowSaraInfo] = useState(false);
  const [projectListVisible, setProjectListVisible] = useState(false);

  const column2Ref = useRef(null);

  // Reset the details scroll position whenever the active project changes.
  useEffect(() => {
    if (column2Ref.current) {
      column2Ref.current.scrollTop = 0;
    }
  }, [activeSlug]);

  /** Show Sara's info; navigate home if we're on a project page. */
  const handleSaraInfoClick = () => {
    setShowSaraInfo(true);
    setProjectListVisible(false);
    if (!isHome) {
      router.push('/');
    }
  };

  /** Expand the project list (mobile). */
  const handleCircleClick = () => {
    setShowSaraInfo(false);
    setProjectListVisible(true);
  };

  return (
    <section className={styles.section}>
      {!projectListVisible && <div className={styles.green_circle} onClick={handleCircleClick}></div>}
      <div className={styles.column_1}>
        <h1
          className={classNames(styles.h1, { [styles.faded]: showSaraInfo && isHome })}
          onClick={handleSaraInfoClick}
        >
          Sara Barcons{' '}
        </h1>
        <div className={`${styles.projectList} ${projectListVisible ? styles.show : ''}`}>
          {projects.map((project) => {
            const slug = slugify(project.title);
            const isActive = slug === activeSlug;
            return (
              <ul className={styles.projectItem} key={project.title}>
                <article className={styles.project}>
                  <Link
                    href={`/projects/${slug}`}
                    className={styles.p}
                    style={{ color: isActive ? 'rgba(0, 0, 0, 0.4)' : '' }}
                  >
                    {project.title} | {project.brand} | {project.date}
                  </Link>
                </article>
              </ul>
            );
          })}
        </div>
      </div>
      <div className={styles.column_2} ref={column2Ref}>
        {selectedProject ? (
          <ProjectDetails project={selectedProject} />
        ) : showSaraInfo && saraInfo ? (
          <div>
            <p className={styles.text_1}>{saraInfo.text_1}</p>
            <p className={styles.text_2_line1}>{saraInfo.text_2_line1} </p>
            <p className={styles.text_2_line2}>{saraInfo.text_2_line2}</p>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Section;
