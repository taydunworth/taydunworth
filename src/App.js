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
        <ul className="flex-list">
          <li><a href="https://dribbble.com/tayloracox" target="_blank"><FontAwesomeIcon icon={faDribbble} /></a></li>
          <li><a href="https://instagram.com/taylorintheteacups" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
          <li><a href="https://linkedin.com/in/tayloracox" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
          <li><a href="https://github.com/tayloracox" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
          <li><a href="mailto:taydunworth@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a></li>
        </ul>
      </main>
    </div>
  );
}

export default App;
