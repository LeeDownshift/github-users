import React from 'react';
import PropTypes from 'prop-types';

function UserCard({user}) {
  return(
    <div className="card col-sm-12 col-md-3">
      <img className="card-img-top" src={user.avatar_url} alt={user.login} />
      <div className="card-body">
        <h5 className="card-title">{user.name} ({user.login})</h5>
        <p className="card-text">{user.bio}</p>
        <a href="/" className="btn btn-primary">View</a>
      </div>
    </div>
  );
} 

UserCard.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
}
export default UserCard;