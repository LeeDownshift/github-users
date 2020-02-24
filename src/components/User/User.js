import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';
import fetchUser from '../../redux/dispatchers/userDispatcher';
// import fetchUserActivity from '../../redux/dispatchers/userActivityDispatcher';
// import fetchUserRepositories from '../../redux/dispatchers/userRepositoriesDispatcher';
import LoadingSpinner from '../LoadingSpinner';
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
    const { 
      pending, 
      // userActivityPending, 
      // userRepositoriesPending 
    } = this.props;

    if (pending !== false) return false;
    return true;
  }
  
  render() {
    const { user } = this.props;
    
    return (
      <div className="main">
        { !this.shouldComponentRender() ?  <LoadingSpinner /> : user.login }
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