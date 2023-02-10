/* eslint-disable react/jsx-no-bind */
/* eslint-disable consistent-return */
import React, { useState, useRef } from 'react';
import {
  Card, Form, Button, Alert, Container,
} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function SignUpPage() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const { signUp } = useAuth();
  console.log('signup', typeof signUp);
  const navigate = useNavigate();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (passwordRef.current && passwordConfirmRef.current) {
      if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError('Passwords do not match.');
      }
    }
    try {
      setError('');
      setLoading(true);
      await signUp(emailRef.current!.value, passwordRef.current!.value);
      navigate('/');
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err.message);
      }
      setError('Failed to create an account.');
    }
    setLoading(false);
  }
  return (
    <Container
      className='mt-5 d-flex justify-content-center align-items-center'

    >
      <div className='w-50'>
        <Card className='mt-4 pb-5' style={{ maxWidth: '33rem' }}>
          <Card.Body className='d-flex justify-content-center align-items-center'>
            <div className='w-75'>
              <h2 className="text-center mb-4">Sign Up</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                  <Form.Text className="text-muted">
                    We will never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordRef}
                    required
                  />

                </Form.Group>
                <Form.Group id="password-confirm">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordConfirmRef}
                    required
                  />
                </Form.Group>
                <Button disabled={loading} className="w-100 mt-4" type="submit">
                  Sign Up
                </Button>
              </Form>
            </div>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Already have an account?
          {' '}
          <Link to="/login"> Log In</Link>
        </div>
      </div>
    </Container>
  );
}
