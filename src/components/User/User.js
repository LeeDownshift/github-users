import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';
import { Row, Alert, Container } from 'react-bootstrap';
import fetchUser from '../../redux/dispatchers/userDispatcher';
// import fetchUserActivity from '../../redux/dispatchers/userActivityDispatcher';
// import fetchUserRepositories from '../../redux/dispatchers/userRepositoriesDispatcher';
import LoadingSpinner from '../LoadingSpinner';
import UserDetail from './UserDetail';
import UserActivities from './UserActivities';
import UserRepositories from './UserRepositories';

export class User extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.slug);
    // this.props.fetchUserActivity(this.props.slug);
    // this.props.fetchUserRepositories(this.props.slug);
  }

  shouldComponentRender() {
    const { pending } = this.props;
    if (pending !== false) return false;
    return true;
  }

  showUserNotFoundError() {
    const { pending, user } = this.props;
    if(!pending && !user) {
      return (<Alert variant="warning">User could not be found.</Alert>);
    } 
  }

  renderComponent() {
    if(!this.shouldComponentRender() && this.props.user === null) {
      return(<LoadingSpinner />);
    } else if (this.shouldComponentRender() && this.props.user !== null) {
      return(<UserDetail user={this.props.user} />);
    }  else {
      return null;
    }
  }
  
  render() {
    const { error } = this.props;
    return (
      <div>
        <Row>
          { error && <Alert variant="danger">{error}</Alert> }
          { this.showUserNotFoundError() }
        </Row>
        { this.renderComponent() }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  slug: ownProps.match.params.slug,
  error: state.users.error,
  user: state.users.user,
  pending: state.users.pending,
  // userActivityPending: state.userActivity.pending,
  // userActivity: state.userActivity.userActivity,
  // userActivityError: state.userActivity.error,
  // userRepositoriesPending: state.userRepositories.pending,
  // userRepositories: state.userRepositories.userRepositories,
  // userRepositoriesError: state.userRepositories.error,
}); 

const mapDispatchToProps = dispatch => bindActionCreators({ 
  fetchUser, 
  // fetchUserActivity,
  // fetchUserRepositories
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(User);