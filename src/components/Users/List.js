import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Row } from 'react-bootstrap';
import UserCard from './UserCard';

function List({users}) {
  if (users.length === 0) {
    return (
      <Alert variant="warning">
        There are no results for this term, please try again.
      </Alert>
    );
  }
  return (
    <Row className="top-margin justify-content-md-center">
      {users.map((user) => <UserCard user={user} key={user.id} />)}
    </Row>
  )
}

List.propTypes = {
  users: PropTypes.array.isRequired,
}

export default List;
