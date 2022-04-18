import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from './SocialLogin';


const Register = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const nameRef = useRef('')
  const navigate = useNavigate();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = event => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    createUserWithEmailAndPassword(email, password)
  }
  const navigateToLogin = e => {
    navigate("/login")
  }
  if (user) {
    navigate("/home");
  }

  return (
    <div>
      <h3 className='text-center p-2'>Please Register</h3>
      <Form onSubmit={handleSubmit} className='container w-50 mx-auto my-2'>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control ref={nameRef} required type="text" placeholder="Enter Your Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} required type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} required type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <p className='text-center'>All ready have an account?<Link className='text-danger pe-auto text-decoration-none' to="/login" onClick={navigateToLogin}>Please Login</Link> </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;