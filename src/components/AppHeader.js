import React from 'react';

function AppHeader() {
  return(
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <span className="navbar-brand">Github Users</span>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a href="/" className="nav-link">Home</a>
        </li>
      </ul>
      
    </nav>
  );
}

export default AppHeader;


