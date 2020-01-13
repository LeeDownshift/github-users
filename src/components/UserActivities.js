import React from 'react';
import Activity from './Activity';

function UserActivities({activities}) {
  return (  
    <ul className="list-group">
      {activities.map((activity) => <Activity activity={activity} />)}
      { activities.length === 0 ? 'No activity information available' : ''}
    </ul>
    
  );
}

export default UserActivities;