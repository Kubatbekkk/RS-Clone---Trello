import React, { useRef, useState } from 'react';
import {
  Card, Form, Button, Alert, Container,
} from 'react-bootstrap';
import { useAuth } from 'src/contexts/AuthContext';
import { Link } from 'react-router-dom';

export default function ForgotPasswordPage() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const emailRef = useRef<HTMLInputElement>(null);
  const { resetPassword } = useAuth();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setMessage('');
      setError('');
      setLoading(true);
      await resetPassword(emailRef.current!.value);
      setMessage('Check your email for futher instructions.');
    } catch (err: unknown) {
      if (err instanceof Error) console.error(err.message);
      setError('Failed to reset password.');
    }
    setLoading(false);
  };

  return (
    <Container
      className='mt-5 d-flex justify-content-center align-items-center'

    >
      <div className='w-50'>
        <Card className='mt-4 pb-3' style={{ maxWidth: '33rem' }}>
          <Card.Body className='d-flex justify-content-center align-items-center'>
            <div className='w-75'>
              <h2 className="text-center mb-4">Password Reset</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              {message && <Alert variant="success">{message}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>

                <Button disabled={loading} className="w-100 mt-4" type="submit">
                  Reset Password
                </Button>
              </Form>
              <div className="w-100 text-center mt-3">
                <Link to="/login">Log In</Link>
              </div>
            </div>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Need an account?
          {' '}
          <Link to="/signup"> Sign Up</Link>
        </div>
      </div>
    </Container>
  );
}
