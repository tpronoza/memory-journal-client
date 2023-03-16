/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar,
  Container,
  Nav,
  Button,
  NavDropdown,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';
// import { useAuth } from '../utils/context/authContext';

export default function NavBar() {
  // const { user } = useAuth();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>Memory Journal</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/">
              <Nav.Link>Home</Nav.Link>
            </Link>
            <NavDropdown title="Inspiration Articles" id="basic-nav-dropdown">
              <Link passHref href="/inspirationarticles">
                <NavDropdown.Item>View All</NavDropdown.Item>
              </Link>
              <Link passHref href="/inspirationarticles/new">
                <NavDropdown.Item>Add A New Article</NavDropdown.Item>
              </Link>
            </NavDropdown>
            <NavDropdown title="Lists" id="basic-nav-dropdown">
              <Link passHref href="/lists">
                <NavDropdown.Item>View All</NavDropdown.Item>
              </Link>
              <Link passHref href="/lists/new">
                <NavDropdown.Item>Add A New List</NavDropdown.Item>
              </Link>
            </NavDropdown>
            <NavDropdown title="Items" id="basic-nav-dropdown">
              <Link passHref href="/items">
                <NavDropdown.Item>View All</NavDropdown.Item>
              </Link>
              <Link passHref href="/items/new">
                <NavDropdown.Item>Add A New Item</NavDropdown.Item>
              </Link>
            </NavDropdown>
            <Button variant="danger" onClick={signOut}>
              Sign Out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
