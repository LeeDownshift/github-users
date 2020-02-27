import React from 'react';
import { ListGroup, Row, Col } from 'react-bootstrap';

function Repository({repo}) {
  return (
    <ListGroup.Item>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer"><h4>{repo.name}</h4></a>
      <p>{repo.description}</p>
      <Row>
        <Col className='watchers'>
          <strong>Watchers: </strong>{repo.watchers_count}
        </Col>
        <Col className='starred'>
          <strong>Starred: </strong>{repo.stargazers_count}
        </Col>
      </Row>
    </ListGroup.Item>
  );
}

export default Repository;