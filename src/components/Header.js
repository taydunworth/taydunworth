import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import logo from '../images/logo.svg';

class Header extends Component {
  render() {
    return (
    <header className="header">
        <Link to="/" aria-label="Tay Dunworth's site home"><img src={logo} className="logo" alt="Tay Dunworth logo" /></Link>
        <nav aria-label="Main navigation">
          <ul>
            <li>
              <Link to="/about">projects</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/about">community</Link>
            </li>
            <li>
              <Link to="/about">speaking</Link>
            </li>
            <li>
              <Link to="/about">resume</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header;