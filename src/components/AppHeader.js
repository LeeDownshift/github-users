import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function AppHeader() {
  return(
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Github Users</Navbar.Brand>
      <Nav>
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}

export default AppHeader;


