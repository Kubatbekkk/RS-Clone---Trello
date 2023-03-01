import React, { useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import Button from '../../components/Utils/Button';
import Input from '../../components/Utils/Input';

import { auth } from '../../config/Firebase';

import { StyledProfile } from './styles';

import { validateEmail } from '../../utils/validateEmail';

const Profile = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setLoading(false);
  }, [user, navigate]);

  const [wrongCredentials, setWrongCredentials] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const validateFields = () => {
    let hasErrors = false;

    if (!validateEmail(email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email' }));
      hasErrors = true;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
    }

    if (password.length < 6) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Invalid password',
      }));
      hasErrors = true;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
    }

    return !hasErrors;
  };

  const updateUser = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateFields()) {
      setLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          if (wrongCredentials) setWrongCredentials('');
          setLoading(false);
          navigate('/');
        })
        .catch((err) => {
          setLoading(false);
          setWrongCredentials(err.message);
        });
    }
  };

  if (loading) return null;

  return (
    <StyledProfile>
      <div className="head">
        <h1>Update Profile</h1>
      </div>

      <div>
        <form onSubmit={updateUser}>
          <Input
            placeholder="Email"
            type="email"
            id="emailInput"
            label="Email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            error={errors.email}
          />
          <Input
            placeholder="Password"
            type="password"
            id="passwordInput"
            label="Password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            error={errors.password}
          />
          <Button
            height="50px"
            width="100%"
            text="Update profile"
            variant
            type="submit"
          />
          {wrongCredentials && <p className="errorMsg">{wrongCredentials}</p>}
          <Link to="/">Back Home</Link>
        </form>
      </div>
    </StyledProfile>
  );
};

export default Profile;
