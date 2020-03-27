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
        <div class="jumbotron">
          <h1 class="highlight" id="intro-heading">UI/UX Designer + Front-End Developer</h1>
          <a href="mailto:taydunworth@gmail.com" rel="noopener noreferrer" class="btn">Let's connect via email</a>
        </div>
        <About />
        <Projects />
        <Buzzwords />
        <CommunityInvolvement />
        <Speaking />
      </main>
      <Footer />
    </div>
  );
}

export default App;
