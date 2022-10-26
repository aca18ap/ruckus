import React from 'react'
import './Nav.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'


function Navigation() {
  return (
    <Navbar bg="green" expand="lg">
    <Container>
      <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <LinkContainer to='/'> 
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/products'> 
            <Nav.Link>Products</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/admin'> 
            <Nav.Link>Admin</Nav.Link>
          </LinkContainer>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="/about">About us</NavDropdown.Item>
            <NavDropdown.Item href="/contacts">Contacts</NavDropdown.Item>
            <NavDropdown.Item href="/faq">FAQ</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}



export default Navigation