import React from 'react';
import { formattedDateTime } from '../../helpers/DateTimeHelper';
import { ListGroup } from 'react-bootstrap';

function Activity({activity}) {
  const activityText = () => {
    let text;
    const { repo, payload } = activity;

    switch (activity.type) {
      case 'CreateEvent':
        text = `Created ${payload.ref_type} ${payload.ref} on ${repo.name}`;
        break;
      case 'DeleteEvent':
        text = `Deleted ${payload.ref_type} ${payload.ref} from ${repo.name}`;
        break;
      case 'ForkEvent':
        text = `Forked ${repo.name}`;
        break;
      case 'IssuesEvent':
        text = `${payload.action} issue #${payload.issue.number} on ${repo.name}`;
        break;
      case 'IssueCommentEvent':
        text = `${payload.action} comment on issue #${payload.issue.number} on ${repo.name}`;
        break;
      case 'PublicEvent':
        text = `Made repository ${repo.name} public`;
        break;
      case 'PushEvent':
        text = `Pushed to ${repo.name}`;
        break;
      case 'PullRequestEvent':
        text = `${payload.action} pull request #${payload.number} on ${repo.name}`;
        break;
      case 'PullRequestReviewEvent':
        text = `${payload.action} pull request #${payload.number} on ${repo.name}`;
        break;
     case 'WatchEvent':
        text = `${payload.action} watching ${repo.name}`;
        break;
      default:
        // if the type is not already covered output the type attribute
        text = activity.type;
        break;
    }

    return text;
  }

  return (
    <ListGroup.Item>
      <h6>{formattedDateTime(activity.created_at)}:</h6> 
      <p>{activityText()}</p>
    </ListGroup.Item>
  );
}

export default Activity;