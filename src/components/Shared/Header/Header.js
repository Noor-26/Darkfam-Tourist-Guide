import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'
const Header = () => {
  const [user] = useAuthState(auth)

    return (
        <div>
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand className="head-text" as={Link} to="/">Darkfam-Tourist-guide</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/service">Service</Nav.Link>
      <Nav.Link as={Link} to="/Blog">Blogs</Nav.Link> 
      
    </Nav>
    <Nav>
    <Nav.Link as={Link} to="/about">About</Nav.Link>

    {
       user ?
       <button className='btn btn-link text-white text-decoration-none' onClick={() => signOut(auth)}>Sign out</button>
   :
      <Nav.Link as={Link} to="/login">Login</Nav.Link>
    }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;