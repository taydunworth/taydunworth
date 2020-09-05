import React, { Component } from 'react';
import { Link } from "react-router-dom";
import $ from "jquery";
import mainLogo from '../images/taylor-dunworth-logo.svg';
import horizontalLogo from '../images/taylor-dunworth-logo-horizontal.svg';
import pdf from '../images/TaylorDunworth-Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDribbble, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {

  componentDidMount() {
    const mainLogo = ('#main-logo');
    const horizontalLogo = ('#horizontal-logo');

    $(window).scroll(function () {
        const topOfWindow = $(window).scrollTop();
        if (topOfWindow) {
            $(mainLogo).addClass("show-logo");
            $(horizontalLogo).addClass("hide-logo");
        } else {
            $(mainLogo).addClass("hide-logo");
            $(horizontalLogo).addClass("show-logo");
        }
    });
  }

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
      <div className="social-list-container" role="navigation" aria-label="Social profiles">
        <ul className="social-list">
          <li>
            <a href="https://dribbble.com/taydunworth" target="_blank" rel="noopener noreferrer" aria-label="Visit Taylor's Dribbble profile">
              <FontAwesomeIcon icon={faDribbble} aria-hidden="true" className="social-icon" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/taylorintheteacups" target="_blank" rel="noopener noreferrer" aria-label="Visit Taylor's Instagram">
              <FontAwesomeIcon icon={faInstagram} aria-hidden="true" className="social-icon" />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/taydunworth" target="_blank" rel="noopener noreferrer" aria-label="Visit Taylor's LinkedIn profile">
              <FontAwesomeIcon icon={faLinkedinIn} aria-hidden="true" className="social-icon" />
            </a>
          </li>
          <li>
            <a href="https://github.com/taydunworth" target="_blank" rel="noopener noreferrer" aria-label="Visit Taylor's Github profile">
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
        <div id="upper-nav">
          <Link to="/" aria-label="Taylor Dunworth's site home page"><img src={mainLogo} id="main-logo" alt="Taylor Dunworth logo" /></Link>
          <Link to="/" aria-label="Taylor Dunworth's site home page"><img src={horizontalLogo} id="horizontal-logo" alt="Taylor Dunworth logo" /></Link>
        </div>
        <FontAwesomeIcon icon={faBars} aria-hidden="true" id="mobile-nav-open" onClick={e => this.handleToggle(e)} />
        <FontAwesomeIcon icon={faTimes} aria-hidden="true" id="mobile-nav-close" onClick={e => this.handleToggle(e)} />
        <nav aria-label="Main navigation">
          <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
            <li>
              <a href="./#about">About</a>
            </li>
            <li>
              <a href="./#projects">Projects</a>
            </li>
            <li>
              <a href="./#community">Community</a>
            </li>
            <li>
              <a href={pdf} target="_blank">Resume</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    )
  }
}

export default Header;