/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import Button from '../../components/Utils/Button';
import Input from '../../components/Utils/Input';

import { auth, provider } from '../../config/Firebase';

import { StyledLogin } from './styles';

import { validateEmail } from '../../utils/validateEmail';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    if (user) {
      setLoading(false);
      return navigate('/');
    }
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

  const loginPrimitiveUser = (e: React.FormEvent) => {
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

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((userRes) => console.log(userRes))
      .catch((err) => console.log(err));
  };

  if (loading) return null;

  return (
    <StyledLogin className="animeBottom">
      <div className="head">
        <h1>Login</h1>
        <p>Enter your account</p>
      </div>

      <div>
        <form onSubmit={loginPrimitiveUser}>
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
            text="Login"
            variant
            type="submit"
          />
          <Button
            onClick={signInWithGoogle}
            height="50px"
            width="100%"
            text="Login With Google"
            type="button"
            variant={false}
          />
          {wrongCredentials && <p className="errorMsg">{wrongCredentials}</p>}
          <Link to="/register">Create an account.</Link>
        </form>
      </div>
    </StyledLogin>
  );
};

export default Login;
