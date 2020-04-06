import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";
import logo from '../images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDribbble, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }

  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }

  render() {
    const { isExpanded } = this.state;

    return (
    <header className="header">
      <div class="social-list-container" role="navigation" aria-label="Social profiles">
        <ul className="social-list">
          <li>
            <a href="https://dribbble.com/taydunworth" target="_blank" rel="noopener noreferrer" aria-label="Visit Tay's Dribbble profile">
              <FontAwesomeIcon icon={faDribbble} aria-hidden="true" className="social-icon" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/taylorintheteacups" target="_blank" rel="noopener noreferrer" aria-label="Visit Tay's Instagram">
              <FontAwesomeIcon icon={faInstagram} aria-hidden="true" className="social-icon" />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/taydunworth" target="_blank" rel="noopener noreferrer" aria-label="Visit Tay's LinkedIn profile">
              <FontAwesomeIcon icon={faLinkedinIn} aria-hidden="true" className="social-icon" />
            </a>
          </li>
          <li>
            <a href="https://github.com/taydunworth" target="_blank" rel="noopener noreferrer" aria-label="Visit Tay's Github profile">
                <FontAwesomeIcon icon={faGithub} aria-hidden="true" className="social-icon" />
            </a>
          </li>
          <li>
            <a href="mailto:taydunworth@gmail.com" rel="noopener noreferrer" aria-label="Send Tay an email">
                <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" className="social-icon" />
            </a>
          </li>
        </ul>
      </div>
      <div id="main-nav" className={`${isExpanded ? "mobile-active" : ""}`}>
        <Link to="/" aria-label="Tay Dunworth's site home page"><img src={logo} className="logo" alt="Tay Dunworth logo" /></Link>
        <FontAwesomeIcon icon={faBars} aria-hidden="true" id="mobile-nav-open" onClick={e => this.handleToggle(e)} />
        <FontAwesomeIcon icon={faTimes} aria-hidden="true" id="mobile-nav-close" onClick={e => this.handleToggle(e)} />
        <nav aria-label="Main navigation">
          <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
            <li>
              <a href="#about-section">About</a>
            </li>
            <li>
              <a href="#projects-section">Projects</a>
            </li>
            <li>
              <a href="#buzzwords-section">Buzzwords</a>
            </li>
            <li>
              <a href="#community-section">Community</a>
            </li>
            <li>
              <a href="#speaking-section">Speaking</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    )
  }
}

export default Header;