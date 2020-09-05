import React from 'react';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Buzzwords from './Buzzwords';
import ScrollToTop from './ScrollToTop';
import CommunityInvolvement from './CommunityInvolvement';
import Footer from './Footer';
import '../styles/App.scss';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <main>
        <div className="jumbotron">
          <h1 className="highlight" id="intro-heading">UI/UX Designer + Front-End Developer</h1>
          <a href="mailto:taydunworth@gmail.com" rel="noopener noreferrer" className="btn">Let's connect via email</a>
        </div>
        <About />
        <Buzzwords />
        <Projects />
        <CommunityInvolvement />
      </main>
      <Footer />
    </div>
  );
}

export default App;
