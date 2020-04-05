import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CreateForm from './components/CreateForm';
import ThankYou from './components/ThankYou';
import ViewPosts from './components/ViewPosts';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/:userId/:formId" component={App} />
      <Route exact path="/ramarao" component={ViewPosts} />
      <Route exact path="/thankyou" component={ThankYou} />
      <Route exact path="/" component={CreateForm} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
