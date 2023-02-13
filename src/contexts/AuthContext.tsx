/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-extraneous-dependencies */
import {
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  updateEmail,
  updatePassword,
  sendPasswordResetEmail,
} from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import type { AuthContextModel, AuthProviderProps, UserContextState } from 'src/pages/types/types';
import { auth } from '../firebase';

const AuthContext = React.createContext<UserContextState>({} as UserContextState);

export function useAuth(): AuthContextModel {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  function signUp(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout(): Promise<void> {
    return signOut(auth);
  }

  async function updateUserEmail(email: string): Promise<void> {
    await updateEmail(auth.currentUser as User, email);
    setCurrentUser((user) => user && { ...user, email });
  }

  function updateUserPassword(password: string): Promise<void> {
    return updatePassword(auth.currentUser as User, password);
  }

  function resetPassword(email: string) {
    return sendPasswordResetEmail(auth, email);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (curUser) => {
      setCurrentUser(curUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    login,
    logout,
    resetPassword,
    updateUserEmail,
    updateUserPassword,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
