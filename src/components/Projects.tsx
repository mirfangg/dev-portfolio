import React from 'react';
import Link from 'next/link';
import { Parallax } from 'react-scroll-parallax';

import { projectsData } from '@/components/data';

function Projects() {
  return (
    <div className="projects-container">
      <Parallax speed={5}>
        <h2>Projects</h2>
        <div className="projects-grid">
          {projectsData.map((item) => (
            <div className="project-card" key={item.id}>
              <div className="project-header">
                <i className="fa-solid fa-globe folder-icon" />
                <div className="small-icons">
                  <Link href={item.link} target="_blank">
                    <i className="fa-solid fa-link" />
                  </Link>
                </div>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </Parallax>
    </div>
  );
}

export default Projects;
