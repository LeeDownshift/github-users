import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './stylesheets/App.css';
import './stylesheets/index.css';
import './stylesheets/bootstrap.min.css';
import UserList from './components/UserList';
import User from './components/User';
import configureStore from './redux/configureStore';

const store = configureStore();
const rootElement = document.getElementById('app');

render(
  <Provider store={store}>
    <Router basename="/">
      <Fragment>
        <Route exact path="/" component={UserList} />
        <Route path="/user/:id" component={User} />
      </Fragment>
    </Router>
  </Provider>,
  rootElement
);
