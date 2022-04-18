import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';


const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();
  let errorElement;



  let from = location.state?.form?.pathname || "/";
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth)

  if (user) {
    navigate(from, { replace: true });
  }
  if (error) {
    errorElement = <div>
      <p className='text-danger'>Error: {error?.message}</p>
    </div>
  }

  const handleSubmit = event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password)
  }
  const navigateRegister = e => {
    navigate("/register")
  }
  const resetPassword = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    alert('Sent email');
  }
  return (
    <div>
      <h3 className='text-center p-2'>Please Login</h3>
      <Form onSubmit={handleSubmit} className='container w-50 mx-auto my-2'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} required type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} required type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      {errorElement}
      <p className='text-center'>New To website <Link className='text-danger pe-auto text-decoration-none' to="/register" onClick={navigateRegister}>Please Register</Link> </p>
      <p className='text-center'> Forget Password? <Link className='text-primary pe-auto text-decoration-none' to="/register" onClick={resetPassword}>Reset Password</Link> </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;