/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-extraneous-dependencies */
import {
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  //   sendPasswordResetEmail,
  //   signOut,
  onAuthStateChanged,
  User,
//   updateEmail,
//   updatePassword,
} from 'firebase/auth';
import React, {
  ReactNode, useContext, useEffect, useState,
} from 'react';

import { auth } from '../firebase';

export interface UserContextState {
  // isAuthenticated: boolean
  // isLoading: boolean
  currentUser: User | null
  login: (email: string, password: string) => Promise<UserCredential>
  signUp: (email: string, password: string) => Promise<UserCredential>
  id?: string
}
export interface AuthContextModel {
  // auth: Auth
  currentUser: User | null
  login: (email: string, password: string) => Promise<UserCredential>
  signUp: (email: string, password: string) => Promise<UserCredential>
  // sendPasswordResetEmail?: (email: string) => Promise<void>
}

const AuthContext = React.createContext<UserContextState>({} as UserContextState);

export function useAuth(): AuthContextModel {
  return useContext(AuthContext);
}

interface AuthProviderProps {
  children?: ReactNode
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (curUser) => {
      setCurrentUser(curUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const value = {
    currentUser,
    signUp,
    login,
  //   logout,
  //   resetPassword,
  //   updateUserEmail,
  //   updateUserPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

// function logout() {
//   return signOut(auth);
// }
// function resetPassword(email: string) {
//   return sendPasswordResetEmail(auth, email);
// }
// function updateUserEmail(email: string) {
//   return updateEmail(auth.currentUser, email);
// }
// function updateUserPassword(password: string) {
//   return updatePassword(auth.currentUser, password);
// }

//
