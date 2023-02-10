/* eslint-disable react/no-array-index-key */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Home, NotFoundPage, BoardsPage, LoginPage,
  SignUpPage, ProfilePage, PrivateRoute, ForgotPasswordPage,
} from './pages';
import { NavbarComponent } from './components';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <NavbarComponent />
        <Routes>
          {['/', '/home'].map((path, index) => (
            <Route
              key={index}
              path={path}
              element={<Home />}
            />
          ))}
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/forgot-password' element={<ForgotPasswordPage />} />
          {/* Private Routes */}
          <Route
            path='/boards'
            element={(
              <PrivateRoute>
                <BoardsPage />
              </PrivateRoute>
          )}
          />

          <Route
            path='/profile'
            element={(
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
)}
          />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
