import React, { useRef, useState } from 'react';
import {
  Alert,
  Button, Card, Container, Form,
} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from 'src/contexts/AuthContext';
import useTitle from 'src/hooks/useTitle';

function LoginPage() {
  useTitle('LoginPage');

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current!.value, passwordRef.current!.value);
      navigate('/');
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err.message);
      }
      setError('Failed to log in.');
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
              <h2 className="text-center mb-4">Log In</h2>
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
                <Button disabled={loading} className="w-100 mt-4" type="submit">
                  Log In
                </Button>
              </Form>
              <div className="w-100 text-center mt-3">
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
              <div className="w-100 text-center mt-2">
                Need an account?
                {' '}
                <Link to="/signup"> Sign Up</Link>
              </div>
            </div>
          </Card.Body>
        </Card>

      </div>
    </Container>
  );
}

export default LoginPage;
