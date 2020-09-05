import React from 'react';
import '../styles/App.scss';

function CommunityInvolvement() {
  return (
    <section id="community-section">
      <span id="community"></span>
      <h2>Community Involvement</h2>
      <div class="grid-container">
        <div class="one-half">
          <h3>Volunteering</h3>
          <ul>
            <li>
              <span><strong>Women Who Code</strong></span>
              <span>Co-Organizer</span>
            </li>

            <li>
              <span><strong>Tampa Bay Women's Tech Network</strong></span>
              <span>Community Co-Organizer</span>
            </li>

            <li>
              <span><strong>Suncoast Developers Guild Jr.</strong></span>
              <span>Co-Organizer and Instructor</span>
            </li>

            <li>
              <span><strong>Tampa Bay Startup Week</strong></span>
              <span>Past Conference Organizer</span>
            </li>
          </ul>
        </div>

        <div class="one-half">
          <h3>Speaking</h3>
          <ul>
            <li>
              <span><strong>Understanding and Implementing Web Accessibility</strong></span>
              <span>Presence</span>
            </li>

            <li>
              <span><strong>Intro to XAML and Xamarin.Forms</strong></span>
              <span>Suncoast Developers Guild</span>
            </li>

            <li>
              <span><strong>Intro to Crash Courses and Public Speaking</strong></span>
              <span>Suncoast Developers Guild</span>
            </li>

            <li>
              <span><strong>Modern Features for Javascript: Foundations of ECMAScript (ES6+)</strong></span>
              <span>Women Who Code Tampa</span>
            </li>

            <li>
              <span><strong>Responsive Layouts with Bootstrap, Flexbox, and CSS Grid</strong></span>
              <span>JoomlaDay Florida 2019</span>
            </li>

            <li>
              <span><strong>“Just Do This,” “It’s Easy,” and Other Ways You’re Discouraging Your Developers</strong></span>
              <span>Suncoast.JS</span>
            </li>

            <li>
              <span><strong>Intro to CSS</strong></span>
              <span>Suncoast Developers Guild</span>
            </li>

            <li>
              <span><strong>Breaking Up With Design</strong></span>
              <span>CMS Summit 2018</span>
            </li>

            <li>
              <span><strong>Should Designers Code?</strong></span>
              <span>Suncoast.JS</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CommunityInvolvement;