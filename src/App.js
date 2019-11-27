import React from 'react';
import logo from './logo.svg';
import hello from './hello.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDribbble, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Tay Dunworth logo" />
      </header>
      <main>
        <img src={hello} id="hello-graphic" alt="" />
        <h1 className="sr-only">Hello.</h1>
        <p>You caught me while I'm reworking my portfolio! In the meantime, reach me via one of the channels below:</p>
        <div class="social-list-container">
          <ul className="social-list">
            <li>
              <a href="https://dribbble.com/taydunworth" target="_blank" aria-label="Visit Tay's Dribbble profile">
                <FontAwesomeIcon icon={faDribbble} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/taylorintheteacups" target="_blank" aria-label="Visit Tay's Instagram">
                <FontAwesomeIcon icon={faInstagram} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/taydunworth" target="_blank" aria-label="Visit Tay's LinkedIn profile">
                <FontAwesomeIcon icon={faLinkedinIn} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="https://github.com/taydunworth" target="_blank" aria-label="Visit Tay's Github profile">
                <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="mailto:taydunworth@gmail.com" aria-label="Send Tay an email">
                <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
