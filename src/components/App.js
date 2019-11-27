import React from 'react';
import hello from '../images/hello.svg';
import Header from './Header';
import SocialLinks from './SocialLinks';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <img src={hello} id="hello-graphic" alt="" />
        <h1 className="sr-only">Hello.</h1>
        <p>You caught me while I'm reworking my portfolio! In the meantime, reach me via one of the channels below:</p>
        <SocialLinks />
      </main>
    </div>
  );
}

export default App;
