import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchUsers from '../redux/dispatchers/usersDispatcher';
import AppHeader from './AppHeader';
import List from './List';
// import SearchForm from './SearchForm';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
  } 

  shouldComponentRender() {
    const { pending } = this.props;
    if (pending !== false) return false;
    return true;
  }

  render() {
    const { users, error } = this.props;

    return (
      <div className="App">
        <AppHeader />
        <main className="container container-fluid mt-5">
          {error && <span>{error}</span>}
          {/* <SearchForm 
            searchTerm={searchTerm} 
            handleKeyPress={this.handleKeyPress}
            handleClick={this.handleClick}
            handleClear={this.handleClear}
          /> */}
          {!this.shouldComponentRender() ? <div>Loading...</div> : <List users={users} />}
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.users.error,
  users: state.users.users,
  pending: state.users.pending,
});

const mapDispatchToProps = dispatch => bindActionCreators({ fetchUsers }, dispatch);

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(UsersList);
