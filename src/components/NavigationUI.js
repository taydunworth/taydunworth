import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import NavigationUICodeSnippet from './codeSnippets/NavigationUICodeSnippet';
import '../styles/App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function NavigationUI() {
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
                SPA Navigation Redesign
            </p>
            <h1>SPA Navigation Redesign</h1>

            <h2>Summary of Project</h2>
            <p>To improve the UX and accessibility of this product's navigability, I simplified and reorganized the look and structure of the single page application's navigation area.</p>

            <div className="case-study-image">
                <h2>Visual Sample</h2>
                <NavigationUICodeSnippet />
                <caption>Simplified Version of Code</caption>
            </div>

            <h2>My Role</h2>
            <p>UI/UX Engineer (designer and developer)</p>

            <h2>The Process and Solution</h2>
            <p>Working directly with the Chief Executive Officer and Founder for this project, we started with analyzing the existing navigation system and breaking it down into a more simplified and clear list. The existing navigation grouped the application's pages into verb-based categories such as "Manage," "Engage," and "Assess" with fly-out submenus revealing the individual pages, which led to confusion amongst new users when learning how to access different areas of the software. This also caused problems with the product's web accessibility compliance based on WCAG 2.0 standards.</p>
            <p>To improve the accessibility and ease of use, we increased the length of the navigation by eliminating those buckets/categories. This allowed for all high-traffic navigation items to be found in one action instead of through multiple steps. The order of the navigation was determined by which pages were accessed the most within the product by the users, and a new button was introduced to the top of the navigation area to allow for users to have quick access to creating content within the application.</p>
            <p>Once the content was finalized, I designed a low-fidelity mockup of a proposed navigation. It included basic styles but focused more on the layout and placement of the new navigation within the product.</p>
            <p>The next step was to transform the approved mockup into multiple high-fidelity versions with an emphasis on styling. We wanted to modernize the overall look of the product while staying within the brand. Because this element would appear on all pages, it was important to keep it minimal but still prominent in the visual hierarchy. The final design showcases a slim, pop-out navigation using icons to initially give context clues and a familiar visual to the user. When hovering or tabbing over each item, the menu expands to reveal the navigation item entirely. Inspiration for the design came from native mobile and desktop application navigation menus.</p>
            <p>Additionally, the menu needed to be responsive, so a layout was also designed to accomodate for smaller screen sizes.</p>
            <p>Once a design was approved, I moved forward with building a simplified version of the navigation with code, which can be seen above.</p>
            <p>After revisions to the interactivity of the prototype, I ported the code into the actual application. This required updating the HTML and LESS to fit in seamlessly with the pre-existing structure of the application, writing functions to handle additional interactive scenarios, and hooking the navigation links up to the application's router.</p>
            <p>While the simplified version above does not showcase this, the finalized version is fully web accessible. Included features are as follows:</p>
            <ul>
                <li>Sufficient color contrast between text/icons and the container</li>
                <li>Keyboard navigation to open and close the navigation fly-out menu using the tab, enter, and escape keys</li>
                <li>Focus outlines when navigating through the list of pages</li>
                <li>The use of accessibility-focused and aria-based attributes such as role, aria-label, aria-hidden, and aria-expanded</li> 
            </ul>
              
            <h2>The Deliverables</h2>
            <ul>
                <li>Low-fidelity of the navigation</li>
                <li>High-fidelity mockup of the navigation</li>
                <li>Interactive prototype of the navigation</li>
                <li>Production-ready code of the navigation</li>
            </ul>

            <h2>Tools and Technologies Used</h2>
            <ul>
                <li>Figma</li>
                <li>AngularJS</li>
                <li>LESS</li>
                <li>TypeScript</li>
                <li>C#</li>
            </ul>
        </main>
        <Footer />
    </div>
  );
}

export default NavigationUI;
