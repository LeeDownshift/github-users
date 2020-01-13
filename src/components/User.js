import React, { Component } from 'react';
import AppHeader from './AppHeader';
import UserActivities from './UserActivities';
import UserRepositories from './UserRepositories';

class User extends Component {
  state = {
    userId: this.props.match.params.id,
    userData: {},
    userRepositories: [],
    userActivities: [],
  }

  componentDidMount() {
    this.fetchUserData().then(user => this.setState({userData: user}));
    this.fetchRepositoryData().then(repos => this.setState({userRepositories: repos}))
    this.fetchActivityData().then(activities => this.setState({userActivities: activities}));
  }

  fetchUserData = () => {
    const userUrl = `https://api.github.com/users/${this.state.userId}`;
    return fetch(userUrl)
      .then(response => response.json())
      .catch((err) => console.error('There was a problem fetching User information: ', err));
  }

  fetchRepositoryData = () => {
    const repoUrl = `https://api.github.com/users/${this.state.userId}/repos`;
    return fetch(repoUrl)
    .then(response => response.json())
    .catch((err) => console.error('There was a problem fetching repository information: ', err));
  }

  fetchActivityData = () => {
    const activityUrl = `https://api.github.com/users/${this.state.userId}/events`;
    return fetch(activityUrl)
    .then(response => response.json())
    .catch((err) => console.error('There was a problem fetching Activity information: ', err));
  }

  render() {
    const { 
      userData, 
      userActivities,
      userRepositories,
    } = this.state;

    return (
      <div className="App">
        <AppHeader />
        <div className="main">
          <div className="row">
            <div className="col-10 text-left offset-1 my-4">
              <a href="/">Back to homepage</a>  
            </div>
          </div>
          <div className="row">
            <div className="jumbotron col-10 offset-1">
              <img 
                src={userData.avatar_url} 
                alt={userData.login} 
                className="img-fluid col-sm-12 col-md-2 float-left" 
              />
              <h1>{userData.name} ({userData.login})</h1>
              <h3>{userData.location}</h3>
              <p>{userData.bio}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 col-sm-12 offset-1">
              <h4>Repositories</h4>
              <UserRepositories repositories={userRepositories} />
            </div>
            <div className="col-md-5 col-sm-12">
              <h4>Recent Activity</h4>
              <UserActivities activities={userActivities} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;