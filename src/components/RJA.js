import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function RJA() {
  return (
    <div className="App">
      <Header />
      <main>
        <p className="breadcrumbs">
            <Link to="/">Home</Link>
            <FontAwesomeIcon icon={faCaretRight} aria-hidden="true" className="arrow-icon" />
            <a href="/#projects">Projects</a>
            <FontAwesomeIcon icon={faCaretRight} aria-hidden="true" className="arrow-icon" />
            Raymond James and Associates Branch Websites
        </p>
        <h1>Raymond James and Associates Branch Websites</h1>
        <p>Within Raymond James and Associates, there are over 500 branches in need of a web presence. While many of the branches have websites, they were all initially built as static webpages using non-reusable components and in a variety of styles that were inconsistent with the Raymond James brand.</p>

        <h2>Summary of Project</h2>
        <p>As Raymond James and Associates grew and increased the number of branch websites that needed built, the existing site creation process proved to be inefficient and out of touch with modern technological capabilities. This project served as the blueprint for moving all of the branch websites from static properties to the company's chosen content management system, Sitecore. From a client-facing perspective, the goal was to provide the branches with unique websites that represent their location while still providing guard rails to keep the style of each site consistent with the Raymond James brand.</p>

        <h2>My Role</h2>
        <p>UI/UX Designer</p>

        <h2>The Process</h2>
        <p>I was fortunate to be highly involved in each phase of this project – the initial planning, design, and build. The team I collaborated with consisted of an account manager, digital strategy manager, creative director, copywriter, business analyst, infrastructure architect, back-end developer, and front-end developer.</p>
        <p>Initially, I worked with an account manager to determine personas for each of the types of branch owners and their specific content needs. From there, we decided upon a list of components that would be available to the branches.</p>
        <p>Once the components were decided upon, I worked with the digital strategy manager to determine user journeys and appropriate sitemaps for each persona.</p>
        <p>I spent the next phase of the project designing low-fidelity mockups of each component with sample website designs for the four home page layout options we were choosing to provide to the branches based on the personas. Once approved, I created interactive prototypes of each component for the developers to review and use as guidelines for the build. In addition to this, the developers also received a list of requirements written by myself and the business analyst and a style guide created by me.</p>
        <p>In some cases, I built pieces of the components using HTML, Sass, JavaScript, Bootstrap, and Yarn. In other cases, I reviewed the work completed by the developers and contributed as needed to stylistic and functional revisions.</p>
        <p>When all components were built and approved, demo websites were created to showcase options for the branches. I then worked with the infrastructure architect, business analyst, and account manager to determine the migration process of old branch websites to new branch websites. My role in this phase included assisting in building a form for branches to fill out to make their custom content choices, building an online catalog of image options, and writing the documentation for the front-end developers and content managers to follow for building a branch website.</p>

        <h2>The Deliverables</h2>
        <ul>
            <li>Component wireframes</li>
            <li>High-fidelity component mockups</li>
            <li>High-fidelity sample/demo websites mockups</li>
            <li>Interactive prototypes of components and websites</li>
            <li>Style guide</li>
            <li>Component stylesheets</li>
            <li>Sample/demo websites</li>
            <li>Documentation on the standards and process for building a branch website</li>
        </ul>

        <h2>Tools and Technologies Used</h2>
        <ul>
            <li>Adobe XD</li>
            <li>Invision</li>
            <li>Sass</li>
            <li>HTML</li>
            <li>Bootstrap</li>
            <li>JavaScript</li>
            <li>Yarn</li>
            <li>Sitecore</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}

export default RJA;
