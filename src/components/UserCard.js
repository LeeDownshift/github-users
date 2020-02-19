import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function UserCard({user}) {
  return(
    <Card style={{ width: '19rem' }}>
      <Card.Img variant="top" src={user.avatar_url} alt={user.login} />
      <Card.Body>
        <Card.Title>{user.login}</Card.Title>
        <Card.Link href={`/user/${user.login}`}>View</Card.Link>
      </Card.Body>
    </Card>
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