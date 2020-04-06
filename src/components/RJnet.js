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
        <p>Raymond James’s Intranet service needed to be converted from the SharePoint platform to Sitecore (the CMS that the company was widely shifting all web properties to), which required a complete redesign and rebuild of the application. As RJnet was used by over 10,000 employees daily, the project included several hurdles such as a large quanities of stakeholders and user personas and the request for a modern appearance but a need for familiarity.</p>

        <h2>My Role</h2>
        <p>Lead UI/UX Designer and Consultant</p>

        <h2>The Process</h2>
        <p>The first piece of the project required collaborating with the product owner and business analyst to identify individual components, their basic functionalities, and anticipated content page types.</p>
        <p>After passing along the basic requirements to the wireframe designer, I reviewed the wireframes and acted as the liaison between the product team and designer for feedback and revisions.</p>
        <p>Once the wireframes were approved by the product team, I created high-fidelity mockups and a fully-styled component library that I presented to the product team on a weekly basis until all components and page type designs were complete and approved.</p>
        <p>After creating the high-fidelity mockups, interactive prototypes were created in Invision and used for in-person testing purposes with a variety of user types. I played a role in the development of the questions and tasks for the users.</p>
        <p>Once visuals and expected interactivity were approved based on testing results, I collaborated with the front-end and back-end developers to build out each component. Within this capacity, I played a role in the approval of each component’s developed appearance and functionality and provided feedback in the forms of verbal explanation and written code as needed.</p>

        <h2>The Deliverables</h2>
        <ul>
            <li>Visual library containing each component, content page type, and usage guidelines</li>
            <li>Written functional requirements</li>
            <li>Style guide for individual components</li>
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
