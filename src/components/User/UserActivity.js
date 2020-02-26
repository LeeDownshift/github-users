import React from 'react';
import { ListGroup, Col } from 'react-bootstrap'; 
import Activity from './Activity';

function UserActivity({activity}) {
  return (
    <Col className="activity-list">
      <h2>Recent Activity:</h2>
      <ListGroup>
        {activity.map((activityItem) => <Activity key={activityItem.id} activity={activityItem} />)}
      </ListGroup>
    </Col>  
  );
}

export default UserActivity;