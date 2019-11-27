import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDribbble, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

class SocialLinks extends Component {
  render() {
    return (
    <div class="social-list-container" role="navigation" aria-label="Social profiles">
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
    )
  }
}

export default SocialLinks;