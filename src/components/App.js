import React from 'react';
import hello from '../images/hello.svg';
import Header from './Header';
import About from './About';
import SocialLinks from './SocialLinks';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <img src={hello} id="hello-graphic" alt="" />
        <h1 className="sr-only">Hello.</h1>
        <About />
        <SocialLinks />
      </main>
    </div>
  );
}

export default App;
