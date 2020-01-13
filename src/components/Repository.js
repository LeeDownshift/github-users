import React from 'react';

function Repository({repo}) {
  return (
    <li className="list-group-item">
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer"><h4>{repo.name}</h4></a>
      <p>{repo.description}</p>
      <div class="row">
        <div className="col-6">
          <strong>Watchers: </strong> {repo.watchers_count}
        </div>
        <div className="col-6">
          <strong>Starred: </strong> {repo.stargazers_count}
        </div>
      </div>
    </li>
  );
}

export default Repository;