import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import RJnet from './components/RJnet';
import RJA from './components/RJA';
import Tombstone from './components/Tombstone';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
      <Route exact path="/" component={App} />
      <Route path="/rjnet" component={RJnet} />
      <Route path="/rja" component={RJA} />
      <Route path="/tombstone" component={Tombstone} />
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
