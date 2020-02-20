import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Alert, Container, Row } from 'react-bootstrap';
import fetchUsers from '../redux/dispatchers/usersDispatcher';
import AppHeader from './AppHeader';
import List from './List';
import LoadingSpinner from './LoadingSpinner';
// import SearchForm from './SearchForm';

export class UsersList extends Component {
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
      <Container fluid>
        <AppHeader />
        <Row className="justify-content-md-center">
          {error && <Alert variant="danger">{error}</Alert>}
        </Row>
        <Row>
          {/* <SearchForm 
            searchTerm={searchTerm} 
            handleKeyPress={this.handleKeyPress}
            handleClick={this.handleClick}
            handleClear={this.handleClear}
          /> */}
        </Row>
          {
          !this.shouldComponentRender() ?  
            <LoadingSpinner /> : 
            <List users={users} />
          }
      </Container>
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
