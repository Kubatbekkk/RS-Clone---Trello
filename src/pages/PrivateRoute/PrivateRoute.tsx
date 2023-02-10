/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'src/contexts/AuthContext';
import { AuthProviderProps } from '../types/types';

function PrivateRoute({ children }: AuthProviderProps): JSX.Element {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
}

export default PrivateRoute;
