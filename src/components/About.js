import React from 'react';
import Header from './Header';
import SocialLinks from './SocialLinks';
import '../styles/App.scss';

function About() {
  return (
    <div className="App">
      <Header />
      <main>
        <section>
          <h2>Get to Know Me</h2>
          <p>Once someone I admired told me, "You’re going to have to pick between design and development some day. You can’t realistically focus on both."</p>

          <p><strong>What some may have called wisdom, I called a challenge.</strong></p>

          <p>You can always find me at the point where design and development intersect. Where code and creativity collide. Where art meets technology.</p>

          <p>I grew up in small-town Indiana with professional endeavors landing me in Indianapolis, New York City, and presently St. Petersburg, Florida. My experience ranges from agency work specializing in marketing and web development to product work with a focus in accessible interfaces for mobile and web applications.</p>

          <p>In my free time, I’m a regular at Walt Disney World and local craft breweries, and I curate Disney-inspired content on <a href="https://www.instagram.com/taylorintheteacups" target="_blank">Instagram</a>.</p>
        </section>
        <SocialLinks />
      </main>
    </div>
  );
}

export default About;