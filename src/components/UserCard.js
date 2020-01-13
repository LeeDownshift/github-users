import React from 'react';
import PropTypes from 'prop-types';

function UserCard({user}) {
  return(
    <div className="col-sm-12 col-md-3 mb-4">
      <div className="card">
        <img className="card-img-top" src={user.avatar_url} alt={user.login} />
        <div className="card-body">
          <h5 className="card-title">{user.login}</h5>
          <a href={`/user/${user.login}`} className="btn btn-primary">View</a>
        </div>
      </div>
    </div>
  );
} 

UserCard.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
}
export default UserCard;