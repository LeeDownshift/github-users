import React, { Component } from 'react';
import '../stylesheets/App.css';
import UserCard from './UserCard';
import AppHeader from './AppHeader';

class App extends Component {
  state = {
    users: [],
  }

  render() {
    const { users } = this.state;
    return (
      <div className="App">
        <AppHeader />
        <main className="container mt-5">
          <form className="form-inline col-12 mx-2 mb-5">
            <input 
              className="form-control col-12" 
              type="text" 
              placeholder="Search" 
              aria-label="Search"
            />
          </form>
        </main>
        <div className="col-10 mx-4">
          {users.map((user) => <UserCard user={user} />)} 
        </div>
        {users.length === 0 ? 'Loading...' : ''}
      </div>
    );
  }
}

export default App;
