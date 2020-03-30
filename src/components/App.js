import React from 'react';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Buzzwords from './Buzzwords';
import CommunityInvolvement from './CommunityInvolvement';
import Speaking from './Speaking';
import Footer from './Footer';
import '../styles/App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="jumbotron">
          <h1 className="highlight" id="intro-heading">UI/UX Designer + Front-End Developer</h1>
          <a href="mailto:taydunworth@gmail.com" rel="noopener noreferrer" className="btn">Let's connect via email</a>
        </div>
        <span class="anchor" id="about-section" aria-hidden="true"></span>
        <About />
        {/* <Projects /> */}
        <span class="anchor" id="buzzwords-section" aria-hidden="true"></span>
        <Buzzwords />
        <span class="anchor" id="community-section" aria-hidden="true"></span>
        <CommunityInvolvement />
        <span class="anchor" id="speaking-section" aria-hidden="true"></span>
        <Speaking />
      </main>
      <Footer />
    </div>
  );
}

export default App;
