import React from 'react';
import Header from './Header';
import SocialLinks from './SocialLinks';
import '../styles/App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h1 id="intro-heading">Hello,</h1>
        <p id="intro-p">I design and build user interfaces and experiences.</p>
        <a className="learn-more" aria-label="Learn more about Tay Dunworth">Learn More <FontAwesomeIcon icon={faLongArrowAltRight} className="learn-more-arrow" aria-hidden="true" /></a>
        <SocialLinks />
      </main>
    </div>
  );
}

export default App;
