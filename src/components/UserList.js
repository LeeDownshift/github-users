import React, { Component } from 'react';
import AppHeader from './AppHeader';
import List from './List';
import SearchForm from './SearchForm';

class UserList extends Component {
  state = {
    allUsers: [],
    searchTerm: '',
    filteredUsers: [],
  }

  componentDidMount() {
    this.fetchUsers().then(users => this.setState({allUsers: users, filteredUsers: users}));
  }

  fetchUsers = () => {
    const usersUrl = 'https://api.github.com/users';
    return fetch(usersUrl)
      .then(response => response.json())
      .catch((err) => console.error('There was a problem fetching Users data: ', err) );
  }

  handleKeyPress = (event) => {
    this.setState({searchTerm: event.target.value});
  }

  handleClick = (event) => {
    event.preventDefault();
    const filtered = this.state.allUsers.filter((user) => {
      return user.login.includes(this.state.searchTerm);
    });

    this.setState({filteredUsers: filtered});
  }

  handleClear = (event) => {
    event.preventDefault();
    this.setState({searchTerm: ''});
    this.setState({filteredUsers: this.state.allUsers});
  }

  render() {
    const { filteredUsers, searchTerm } = this.state;
    return (
      <div className="App">
        <AppHeader />
        <main className="container container-fluid mt-5">
          <SearchForm 
            searchTerm={searchTerm} 
            handleKeyPress={this.handleKeyPress}
            handleClick={this.handleClick}
            handleClear={this.handleClear}
          />
          <List users={filteredUsers} />
        </main>
      </div>
    );
  }
}

export default UserList;
