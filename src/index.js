import React from 'react';
import ReactDOM from 'react-dom';
import logo from './images/logo.svg';
import './index.css';
import App from './components/App';
import About from './components/About';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './fonts/Chaitea-ExtraBold.ttf'

const routing = (
    <Router>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
