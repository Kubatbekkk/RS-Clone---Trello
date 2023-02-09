/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-extraneous-dependencies */
import {
  UserCredential,
  createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   sendPasswordResetEmail,
//   signOut,
//   onAuthStateChanged,
//   updateEmail,
//   updatePassword,
} from 'firebase/auth';
import React, {
  ReactNode, useContext,
} from 'react';

import { auth } from '../firebase';

export interface UserContextState {
  // isAuthenticated: boolean
  // isLoading: boolean
  signUp: (email: string, password: string) => Promise<UserCredential>
  id?: string
}
export interface AuthContextModel {
  // auth: Auth
  // user: User | null
  // signIn: (email: string, password: string) => Promise<UserCredential>
  signUp: (email: string, password: string) => Promise<UserCredential>
  // sendPasswordResetEmail?: (email: string) => Promise<void>
}

const AuthContext = React.createContext<UserContextState>({} as UserContextState);

export function useAuth(): AuthContextModel {
  return useContext(AuthContext);
}

// interface AuthContextProps {
//   // currentUser,
//   signup: (email: string, password: string) => firebase.Thenable<unknown>,
//   login,
//   logout,
//   resetPassword,
//   updateUserEmail,
//   updateUserPassword,
// }

interface AuthProviderProps {
  children?: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  function signUp(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // const value = {
  //   currentUser,
  // signup,
  //   login,
  //   logout,
  //   resetPassword,
  //   updateUserEmail,
  //   updateUserPassword,
  // };

  return (
    <AuthContext.Provider value={{ signUp }}>
      {children}
    </AuthContext.Provider>
  );
}

// const [currentUser, setCurrentUser] = useState();
// const [loading, setLoading] = useState(true);

// function login(email: string, password: string) {
//   return signInWithEmailAndPassword(auth, email, password);
// }
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

// useEffect(() => {
//   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//     setCurrentUser(currentUser);
//     setLoading(false);
//   });
//   return () => {
//     return unsubscribe();
//   };
// }, []);
//
