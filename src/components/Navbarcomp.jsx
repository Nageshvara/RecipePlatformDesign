import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Search from '@mui/icons-material/Search';
import '../App.css';

function Navbarcomp({ showAuthButton = true }) {  // Added 'showAuthButton' as a prop with a default value
  return (
    <Navbar expand="lg" className="bg-transparent">
      <Container fluid>
        <Navbar.Brand href="#" className='navtext'>
          <img 
            src='/assets/image 2.jpg'
            alt="SpiceScript Logo" 
            style={{ width: '40px', marginRight: '10px' }} 
          />
          SpiceScript
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-center"> 
          <Nav
            className="navtext my-2 my-lg-0"
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/">Recipes</Nav.Link>
            <Nav.Link href="/">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {showAuthButton ? (
          <Link to='/authenticate'><Button variant="outline-dark">Login / Sign up</Button></Link>
        ) : (
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark"><Search/></Button>
          </Form>
        )}
      </Container>
    </Navbar>
  );
}

export default Navbarcomp;
