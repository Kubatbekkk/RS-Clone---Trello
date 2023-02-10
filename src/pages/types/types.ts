import { User, UserCredential } from 'firebase/auth';
import { ReactNode } from 'react';

export interface AuthProviderProps {
  children?: ReactNode
}
export interface UserContextState {
  currentUser: User | null
  login: (email: string, password: string) => Promise<UserCredential>
  signUp: (email: string, password: string) => Promise<UserCredential>
  updateUserEmail: (email: string) => Promise<void>
  updateUserPassword: (password: string) => Promise<void>
  resetPassword: (email: string) => Promise<void>
  logout: () => Promise<void>
}
export interface AuthContextModel {
  currentUser: User | null
  login: (email: string, password: string) => Promise<UserCredential>
  signUp: (email: string, password: string) => Promise<UserCredential>
  updateUserEmail: (email: string) => Promise<void>
  updateUserPassword: (password: string) => Promise<void>
  resetPassword: (email: string) => Promise<void>
  logout: () => Promise<void>
}
