import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';
import { Row, Alert, Container } from 'react-bootstrap';
import fetchUser from '../../redux/dispatchers/userDispatcher';
import fetchUserActivity from '../../redux/dispatchers/userActivityDispatcher';
import fetchUserRepositories from '../../redux/dispatchers/userRepositoriesDispatcher';
import LoadingSpinner from '../LoadingSpinner';
import UserDetail from './UserDetail';
import UserActivities from './UserActivity';
import UserRepositories from './UserRepositories';

export class User extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.slug);
    this.props.fetchUserActivity(this.props.slug);
    this.props.fetchUserRepositories(this.props.slug);
  }

  userDataLoaded() {
    if (this.props.user !== null) return true;
    return false;
  }

  userActivityDataLoaded() {
    if (this.props.userActivity !== null) return true;
    return false;
  }

  userRepositoriesDataLoaded() {
    if (this.props.userRepositories !== null) return true;
    return false;
  }

  userDataPending() {
    let userLoaded = false;
    const { pending } = this.props;
    if (pending === undefined || pending && !this.userDataLoaded()) userLoaded = false;
    if (pending === false && this.userDataLoaded()) userLoaded = true;
    return userLoaded;
  }

  userActivityDataPending() {
    let userActivityLoaded = false;
    const { userActivityPending } = this.props;
    if (userActivityPending === undefined || userActivityPending && !this.userActivityDataLoaded()) userActivityLoaded = false;
    if (userActivityPending === false && this.userActivityDataLoaded()) userActivityLoaded = true;
    return userActivityLoaded;
  }

  userRepositoriesDataPending() {
    let userRepositoriesLoaded = false;
    const { userRepositoriesPending } = this.props;
    if (userRepositoriesPending === undefined || userRepositoriesPending && !this.userRepositoriesDataLoaded()) userRepositoriesLoaded = false;
    if (userRepositoriesPending === false && this.userRepositoriesDataLoaded()) userRepositoriesLoaded = true;
    return userRepositoriesLoaded;
  }

  showUserNotFoundError() {
    const { pending, user } = this.props;
    if(!pending && !user) {
      return (<Alert variant="warning">User could not be found.</Alert>);
    } 
  }

  renderSpinner() {
    let spinner;
    if(!this.userDataLoaded() || !this.userActivityDataLoaded()) {
      spinner = <LoadingSpinner />;
    } 
    return spinner;
  }
  
  render() {
    const { user, userActivity, userRepositories, error } = this.props;
    return (
      <div>
        { error && <Alert variant="danger">{error}</Alert> }
        { this.showUserNotFoundError() }
        { this.userDataPending() ? <UserDetail user={user} /> : '' }
        <Row className="justify-content-md-center" style={{width: '80%', margin: '0 auto'}}>
          { this.renderSpinner() }
          { this.userActivityDataPending() ? <UserActivities activity={userActivity} /> : ''}
          { this.userRepositoriesDataPending() ? <UserRepositories repositories={userRepositories} /> : ''}
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  slug: ownProps.match.params.slug,
  error: state.users.error,
  user: state.users.user,
  pending: state.users.pending,
  userActivityPending: state.userActivity.pending,
  userActivity: state.userActivity.userActivity,
  userActivityError: state.userActivity.error,
  userRepositoriesPending: state.userRepositories.pending,
  userRepositories: state.userRepositories.userRepositories,
  userRepositoriesError: state.userRepositories.error,
}); 

const mapDispatchToProps = dispatch => bindActionCreators({ 
  fetchUser, 
  fetchUserActivity,
  fetchUserRepositories
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(User);