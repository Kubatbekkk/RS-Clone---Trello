/* eslint-disable react/jsx-no-useless-fragment */
import React, { ReactNode } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import { auth } from 'src/config/Firebase';

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const [user] = useAuthState(auth);
  console.log(user);
  if (!user) {
    return <Navigate to='/login' />;
  }

  return (
    <>{children}</>
  );
};

export default PrivateRoute;
