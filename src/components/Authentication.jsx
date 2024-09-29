import React, { useState } from 'react';
import './Authentication.css';
import { Link } from 'react-router-dom';
import { Navbar, Container, Form, Button } from 'react-bootstrap';

function Authentication() {
  const [isRegister, setIsRegister] = useState(false);

  const handleRegisterClick = (e) => {
    e.preventDefault();
    setIsRegister(true);
    document.body.classList.add('no-scroll');
    document.getElementById('regsection').scrollIntoView({ behavior: 'smooth' });
  };

  const handleBackToLoginClick = (e) => {
    e.preventDefault();
    setIsRegister(false);
    document.body.classList.remove('no-scroll');
    document.getElementById('login').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <Navbar className="authnav">
        <Container className='navcontain'>
          <Navbar.Brand>
            <img
              alt=""
              src="/assets/image 2.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            SpiceScript
          </Navbar.Brand>
        </Container>
      </Navbar>
      
      <div className={`main-container ${isRegister ? 'hidden' : 'visible'}`} id="login">
        <div className="login-section">
          <h1>Login.</h1>
          <Form className="custom-form">
            <div className="google-signin">
              <Button className="google-btn mb-3">
                Sign in with Google <img src='/assets/google.png' alt='google-icon' className='google-icon'/>
              </Button>
            </div>
            <hr /> 
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div style={{textAlign:'center'}}>
              <Link to='/homepage'>
              <Button variant="dark" type="submit">
                Submit
              </Button>
              </Link>
            </div>
            <div style={{textAlign:'center', marginTop:'10px'}}>
              <a href="#regsection" onClick={handleRegisterClick}>Not registered yet? Sign up.</a>
            </div>
          </Form>
        </div>
        <div className='plainellipcontain'>
          <img src='/assets/Ellipse plain.png' alt='Plain ellipse' className='plainellip'/>
          <img src='/assets/Overlayellip1.png' alt='Overlaydish' className='overlay-img'/>
        </div>
      </div>
      
      <div className={`main-container-reversed ${isRegister ? 'visible' : 'hidden'}`} id='regsection'>
        <div className="image-section-reversed">
          <img src='/assets/Ellipse plain.png' alt='Plain ellipse' className='plainelliprev'/>
          <img src='/assets/Ellipse 5.png' alt='Overlaydish' className='overlay-img-rev'/>
        </div>
        <div className="login-section-reversed">
          <h1>Register.</h1>
          <Form className="custom-form">
            <div className="google-signin">
              <Button className="google-btn mb-3">
                Sign up with Google <img src='/assets/google.png' alt='google-icon' className='google-icon'/>
              </Button>
            </div>
            <hr /> 
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div style={{textAlign:'center'}}>
            <Link to='/homepage'>
              <Button variant="dark" type="submit">
                Submit
              </Button>
              </Link>
            </div>
            <div style={{textAlign:'center', marginTop:'10px'}}>
              <a href="#login" onClick={handleBackToLoginClick}>Already have an account? Login.</a>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
