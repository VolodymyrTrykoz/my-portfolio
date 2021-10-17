import React from 'react';
import './projects.scss';
import {projectsList} from './projecstList';

const Projects = () => (
  <section className="projects">
    <div className="wrapper">
      {
        projectsList.map(({title,link, tools}) => (
          <div
            className={`card card__${title}`}
            key={title}
          >
            <div className="front">
              <h2>{title}</h2>
            </div>
            <div className="right">
              <h3>{title}</h3>
              <ul>
                {
                  tools.map((el) => (
                    <li key={el}>
                      {el}
                    </li>
                  ))
                }
              </ul>
              <a className="card__link" href={link} target="_blank">Visit site</a>
            </div>
          </div>
        ))
      }
    </div>
  </section>
)

export default Projects;
