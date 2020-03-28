import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function RJnet() {
  return (
    <div className="App">
      <Header />
      <main>
        <p className="breadcrumbs">
            <Link to="/">Home</Link>
            <FontAwesomeIcon icon={faCaretRight} aria-hidden="true" className="arrow-icon" />
            <a href="/#projects">Projects</a>
            <FontAwesomeIcon icon={faCaretRight} aria-hidden="true" className="arrow-icon" />
            RJnet Intranet Redesign
        </p>
        <h1>RJnet Intranet Redesign</h1>
        <p>Due to the confidential nature of the project, visual assets related to my work on this cannot be distributed publicly.</p>

        <h2>Summary of Project</h2>
        <p>Raymond James’s Intranet service needed to be converted from SharePoint to Sitecore, which required a complete redesign and rebuild of the application. As an application used by over 10,000 employees daily, the project included several hurdles such as a large quantity of stakeholders and user personas and the request for a modern styles but the need for familiar visuals.</p>

        <h2>My Role</h2>
        <p>As the lead designer for the project, I reviewed contractors’ wireframes and acted as the liaison between the product owner and the designers to communicate requirements and revisions. The wireframes were made up of individual components that were decided upon by myself, the product owner, and the business analyst.</p>
        <p>When wireframes and components were approved by the product owner, I created high-fidelity mockups and a fully-styled component library that I presented to the product owners on a weekly basis until all component and page type designs were complete.</p>
        <p>After creating the high-fidelity mockups, interactive prototypes were created and used for in-person testing purposes with a variety of user types. I played a role in the development of the questions and tasks for the users.</p>
        <p>Once approved, I collaborated with the front-end and back-end developers to build out each component. Within this capacity, I played a role in the approval of each component’s developed appearance and functionality and provided feedback in the form of verbal explanation and written code to the developers as needed.</p>

        <h2>The Deliverables</h2>
        <ul>
            <li>Visual library of each component and written functional requirements</li>
            <li>Style guide for each component</li>
            <li>High-fidelity mockups of example pages</li>
        </ul>

        <h2>Tools and Technologies Used</h2>
        <ul>
            <li>Adobe XD</li>
            <li>Adobe InDesign</li>
            <li>HTML</li>
            <li>Sass</li>
            <li>Sitecore</li>
            <li>Invision</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}

export default RJnet;
