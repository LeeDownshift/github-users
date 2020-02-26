import React from 'react';
import PropTypes from 'prop-types';
import { Jumbotron, Container, Image, Row, Col } from 'react-bootstrap';

function UserDetail({user}) {
  return(
      <Jumbotron>
        <Container>
          <Row>
            <Col xs={12} md={3}>
              <Image src={user.avatar_url} rounded />
            </Col>
            <Col xs={12} md={9}>
              <h1>{user.name} ({user.login})</h1>
              <ul>
                <li><strong>Location: </strong>{user.location}</li>
                <li><strong>Blog: </strong><a href={user.blog} target="_blank">{user.blog}</a></li>
                <li><strong>Followers: </strong>{user.followers}</li>
                <li><strong>Following: </strong>{user.following}</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
  );
 
}

UserDetail.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    blog: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
}

export default UserDetail;