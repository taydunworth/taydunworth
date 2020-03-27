import React from 'react';
import '../styles/App.scss';

function Projects() {
  return (
    <section id="projects">
        <article>
        <h2>Selected Projects</h2>
        <p>Case studies showcasing the highlights of my career</p>
        <ul>
            <li>
                <div id="project-one">
                    <h3>Item One</h3>
                </div>
            </li>
            <li>
                <div id="project-two">
                    <h3>Item Two</h3>
                </div>
            </li>
            <li>
                <div id="project-three">
                    <h3>Item Three</h3>
                </div>
            </li>
        </ul>
        </article>

        <article>
            <h2>Additional Work</h2>
            <ul>
                <li>
                    <p>I post design pieces on Dribbble!</p>
                    <a href="https://dribbble.com/taydunworth" target="_blank" rel="noopener noreferrer">Check out my designs</a>
                </li>
                <li>
                    <p>I share many of my projects on Github!</p>
                    <a href="https://github.com/taydunworth" target="_blank" rel="noopener noreferrer">Review my code</a>
                </li>
                <li>
                    <p>I sell my more artistic work on Etsy!</p>
                    <a href="https://etsy.com/shop/taydunworth" target="_blank" rel="noopener noreferrer">Visit my shop</a>
                </li>
            </ul>
        </article>
    </section>
  );
}

export default Projects;