import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from "../../../Images/logo.png"

const Header = () => {
  const [user] = useAuthState(auth)
  const handleSingOut = () => {
    signOut(auth);
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className='text-center'>
        <div>
          <Navbar.Brand as={Link} to="/">
            <img className='w-25 mx-2' src={logo} alt="" />
            In Focus</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="home#services">Services</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
          </Nav>
          <Nav>
            {
              user ?
                <button className='btn btn-link text-decoration-none text-info' onClick={handleSingOut}>Sing out</button>
                :
                <Nav.Link as={Link} to="/Login">Login</Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;