/* eslint-disable react/jsx-no-bind */
/* eslint-disable consistent-return */
import React, { useRef, useState } from 'react';
import {
  Card, Form, Button, Alert, Container,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from 'src/contexts/AuthContext';

export default function ProfilePage() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const { currentUser, updateUserEmail, updateUserPassword } = useAuth();
  // const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (passwordRef.current && passwordConfirmRef.current) {
      if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError('Passwords do not match.');
      }
    }
    const promises = [];
    setLoading(true);
    setError('');
    if (emailRef.current && currentUser) {
      if (emailRef.current.value !== currentUser.email) {
        promises.push(updateUserEmail(emailRef.current!.value));
      }
    }
    if (passwordRef.current) {
      if (passwordRef.current.value) {
        promises.push(updateUserPassword(passwordRef.current!.value));
      }
    }

    Promise.all(promises)
      .then(() => {
        // navigate('/');
      })
      .catch(() => {
        setError('Failed to update account.');
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <Container
      className='mt-5 d-flex justify-content-center align-items-center'

    >
      <div className='w-50'>
        <Card>
          <Card.Body className='d-flex justify-content-center align-items-center'>
            <div className='w-75'>
              <h2 className="text-center mb-4">Update Profile</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>
                    Email:
                    {' '}
                    <Form.Text className='text-primary'>
                      {currentUser?.email || ''}
                    </Form.Text>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    ref={emailRef}
                    defaultValue={currentUser?.email || ''}
                  />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordRef}
                    placeholder="Leave blank to keep the same"
                  />
                </Form.Group>
                <Form.Group id="password-confirm">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordConfirmRef}
                    placeholder="Leave blank to keep the same"
                  />
                </Form.Group>
                <Button disabled={loading} className="w-100 mt-4" type="submit">
                  Update
                </Button>
              </Form>
            </div>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          <Link to="/">Cancel</Link>
        </div>
      </div>
    </Container>
  );
}
