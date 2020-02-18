import React from 'react';
import PropTypes from 'prop-types';
import UserCard from './UserCard';

function List({users}) {
  return (
    <div className="row col-12"> 
      {
        users.length === 0 ? 'There are no results for this term, please try again.' : users.map((user) => <UserCard user={user} key={user.id} />)
      }
    </div>
  );
}

List.propTypes = {
  users: PropTypes.array.isRequired,
}

export default List;
