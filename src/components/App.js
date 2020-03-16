import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/style.scss';
import { Container } from 'react-bootstrap';
import AppHeader from './AppHeader';
import UserList from './Users/UserList';
import User from './User/User';

function App() {
  return (
    <div>
      <AppHeader />
      <Switch>
        <Route path="/:slug" component={User} /> 
        <Route exact path="/" component={UserList} />
      </Switch>
    </div>
  );
}

export default App;