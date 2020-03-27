import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import About from './components/About';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
