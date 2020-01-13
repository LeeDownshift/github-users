import React from 'react';
import Repository from './Repository';

function UserRepositories({repositories}) {
  return (
    <ul className="list-group">
      {repositories.map((repo) => <Repository repo={repo} />)}
      {repositories.length === 0 ? 'No repository information available' : ''}
    </ul>
  );
}

export default UserRepositories;