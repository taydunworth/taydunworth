import React from 'react';
import '../styles/App.scss';
import aboutImage from '../images/Taylor-Dunworth-Headshot.png';

function About() {
  return (
    <section id="about-section">
      <span id="about"></span>
      <div class="grid-container">
        <div class="one-half">
          <h2>
              Hi, I'm Taylor, and
              <br />it's nice to meet you.
          </h2>
          <p>I’m a UI/UX designer and front-end developer based in sunny St. Petersburg, Florida with an affinity for cups of tea, Disney, and kind people.</p>
          <p>My specialties include intuitive, inclusive design and development and creating resonance for users through simplicity.</p>
          <p>I grew up in small-town Indiana with professional endeavors landing me in Indianapolis, New York City, and presently Tampa Bay, Florida. My experience ranges from agency work specializing in marketing and web development to product work with a focus in interfaces for mobile and web applications.</p>
          <p>In my free time, I’m a regular at Walt Disney World and local craft breweries, and I curate Disney-inspired content on <a href="https://instagram.com/taylorintheteacups" target="_blank" rel="noopener noreferrer">Instagram</a>. I also sell handmade items on <a href="https://etsy.com/shop/taydunworth" target="_blank" rel="noopener noreferrer">Etsy</a>.</p>
        </div>
        <div class="one-half">
          <img src={aboutImage} class="headshot-img" alt="Headshot of Taylor Dunworth" />
        </div>
      </div>
    </section>
  );
}

export default About;