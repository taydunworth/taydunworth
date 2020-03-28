import React from 'react';
import '../styles/App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function Projects() {
  return (
    <section id="projects">
        <article id="case-studies">
        <h2>Professional Projects</h2>
        <ul>
            <li>
                <div id="project-one">
                    <Link to="/rjnet">
                        <h3 className="highlight">RJnet Intranet Redesign</h3>
                    </Link>
                </div>
            </li>
            <li>
                <div id="project-two">
                    <Link to="/rja">
                        <h3 className="highlight">Raymond James and Associates Branch Websites</h3>
                    </Link> 
                </div>
            </li>
            <li>
                <div id="project-three">
                    <Link to="/tombstone">
                        <h3 className="highlight">Raymond James Financial Tombstone Redesign</h3>
                    </Link>
                </div>
            </li>
        </ul>
        </article>

        <article id="additional-work">
            <h2>Personal Projects</h2>
            <ul>
                <li>
                    <p>I post design pieces on Dribbble!</p>
                    <a href="https://dribbble.com/taydunworth" target="_blank" rel="noopener noreferrer">
                        Check out my designs
                        <FontAwesomeIcon icon={faCaretRight} aria-hidden="true" className="arrow-icon" />
                    </a>
                </li>
                <li>
                    <p>I share many of my projects on Github!</p>
                    <a href="https://github.com/taydunworth" target="_blank" rel="noopener noreferrer">
                        Review my code
                        <FontAwesomeIcon icon={faCaretRight} aria-hidden="true" className="arrow-icon" />
                    </a>
                </li>
                <li>
                    <p>I sell my more artistic work on Etsy!</p>
                    <a href="https://etsy.com/shop/taydunworth" target="_blank" rel="noopener noreferrer">
                        Visit my shop
                        <FontAwesomeIcon icon={faCaretRight} aria-hidden="true" className="arrow-icon" />
                    </a>
                </li>
            </ul>
        </article>
    </section>
  );
}

export default Projects;