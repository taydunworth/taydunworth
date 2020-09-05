import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import '../styles/App.scss';
import TombstoneUI from '../images/Tombstone-UI.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function Tombstone() {
  return (
    <div className="App">
        <ScrollToTop />
        <Header />
        <main>
            <p className="breadcrumbs">
                <Link to="/">Home</Link>
                <FontAwesomeIcon icon={faCaretRight} aria-hidden="true" className="arrow-icon" />
                <a href="/#projects">Projects</a>
                <FontAwesomeIcon icon={faCaretRight} aria-hidden="true" className="arrow-icon" />
                Raymond James Financial Tombstone Redesign
            </p>
            <h1>Raymond James Financial Tombstone Redesign</h1>

            <h2>Summary of Project</h2>
            <p>Within the financial industry, tombstones act as trophies for advisors and firms to showcase to their transactions. RaymondJames.com features thousands of digital tombstones on its website, and the process of creating tombstones was inefficient and designed with an outdated style. The marketing department at Raymond James requested a sleeker design and an improved process for creation.</p>

            <div className="case-study-image">
                <h2>Visual Sample</h2>
                <img src={ TombstoneUI } alt="Tombstone UI Mockup" />
                <caption>Sample of tombstone interface varieties</caption>
            </div>

            <h2>My Role</h2>
            <p>UI/UX Designer</p>

            <h2>The Process</h2>
            <p>I worked directly with two account managers to develop a plan for how to improve the creation process and overall visual appeal of the tombstones. Included in this, I documented each possible variation of current tombstones for both the Capital Markets and Public Finance divisions of Raymond James. For example, it was found, in some cases, that the division might want to include up to three company logos or choose to list if the transaction occurred across international borders.</p>
            <p>When all variations were documented, I designed wireframes for each of these showcasing the expected layouts. Once approved by the account managers and clients, I translated the wireframes into high-fidelity mockups.</p>
            <p>Aside from the design of the tombstone, we needed to determine a new process for the tombstones to be built. In the current process, the design team within the marketing department would spend up to 30 minutes designing each tombstone. On average, a design job would include making up to 30 tombstones. On the high end, a designer might be required to design 70. With a smaller staff, this process was holding back the designers from tackling larger, more innovative projects.</p>
            <p>To alleviate this, I collaborated with the two account managers and a full-stack developer to create a new process that would involve the account managers using a web application to create the tombstones by entering the text and logos into predetermined spaces. Dropdowns, checkboxes, and radio buttons would also exist to toggle components such as number of logos and type of transaction, on and off.</p>

            <h2>The Deliverables</h2>
            <ul>
                <li>Wireframes for the tombstones</li>
                <li>Wireframe for tombstone builder</li>
                <li>Requirements for the tombstone builder</li>
                <li>High-fidelity mockups of tombstones</li>
            </ul>

            <h2>Tools and Technologies Used</h2>
            <ul>
                <li>Adobe XD</li>
            </ul>
        </main>
        <Footer />
    </div>
  );
}

export default Tombstone;
