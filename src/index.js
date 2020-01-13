import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './stylesheets/App.css';
import './stylesheets/index.css';
import './stylesheets/bootstrap.min.css';
import UserList from './components/UserList';
import User from './components/User';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <React.Fragment>
      <Route exact path="/" component={UserList} />
      <Route path="/user/:id" component={User} />
    </React.Fragment>
  </BrowserRouter>,
  document.getElementById('root')
);
serviceWorker.unregister();
