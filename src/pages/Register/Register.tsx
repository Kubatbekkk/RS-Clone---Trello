/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { validateEmail } from 'src/utils/validateEmail';
import {
  createUserWithEmailAndPassword, signInWithPopup,
} from 'firebase/auth';
import { auth, provider } from 'src/config/Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Input from '../../components/Utils/Input';
import Button from '../../components/Utils/Button';
import { StyledRegister } from './styles';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [wrongCredentials, setWrongCredentials] = useState('');
  const [errors, setErrors] = useState({
    email: '', password: '',
  });

  const navigate = useNavigate();

  const [user] = useAuthState(auth);

  useEffect(() => {
    setLoading(true);
    if (user) {
      setLoading(false);
      navigate('/');
    }
    setLoading(false);
  }, [user, navigate]);

  const validateFields = () => {
    let hasErrors = false;
    if (!validateEmail(email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email' }));
      hasErrors = true;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
    }

    if (password.length < 6) {
      setErrors((prevErrors) => ({ ...prevErrors, password: 'Password too short' }));
      hasErrors = true;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
    }
    return !hasErrors;
  };

  const createPrimitiveUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateFields()) {
      setLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          setLoading(false);
          navigate('/');
        }).catch((err) => {
          setLoading(false);
          setWrongCredentials(err.message);
        });
    }
  };

  const createWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result: unknown) => console.log(result))
      .catch((err) => setWrongCredentials(err.message));
  };

  if (loading) return <p>Loading...</p>;
  return (
    <StyledRegister className="animeBottom">
      <div className='head'>
        <h1>Register</h1>
        <p>Register your new account</p>
      </div>
      <div>
        <form onSubmit={createPrimitiveUser}>
          <Input
            placeholder='Email'
            type='email'
            id='emailInput'
            label='Email'
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            error={errors.email}
          />
          <Input
            placeholder='Password'
            type='password'
            id='passwordInput'
            label='Password'
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            error={errors.password}
          />
          <Button
            height='50px'
            width='100%'
            text='Register'
            variant
            type='submit'
          />
          <Button
            onClick={createWithGoogle}
            height='50px'
            width='100%'
            text='Register with Google'
            variant
          />
          {wrongCredentials && <p className='errorMsg'>{wrongCredentials}</p>}
          <Link to='/login'>Login to your account.</Link>
        </form>
      </div>
    </StyledRegister>
  );
};
export default Register;
