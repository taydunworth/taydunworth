import React from 'react';
import '../styles/App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function Projects() {
  return (
    <section id="projects-section">
      <span id="projects"></span>
        <article id="case-studies">
            <h2>Professional Projects</h2>
            <ul>
                <li>
                    <Link to="/rjnet">
                        <div id="project-one">
                            <h3>RJnet Intranet Redesign</h3>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/rja">
                        <div id="project-two">
                            <h3>Raymond James and Associates Branch Websites</h3>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/tombstone">
                        <div id="project-three">
                            <h3>Raymond James Financial Tombstone Redesign</h3>
                        </div>
                    </Link>
                </li>
            </ul>
        </article>
    </section>
  );
}

export default Projects;