import React from 'react';
import { ListGroup, Col } from 'react-bootstrap';
import Repository from './Repository';

function UserRepositories({repositories}) {
  return (
    <Col className="repository-list">
      <h2>Repositories:</h2>
      <ListGroup>
        {repositories.map((repo) => <Repository key={repo.id} repo={repo} />)}
      </ListGroup>
    </Col>
  );
}

export default UserRepositories;