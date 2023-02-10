/* eslint-disable react/no-array-index-key */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Home, NotFoundPage, BoardsPage, LoginPage, SignUpPage, ProfilePage,
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
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/boards' element={<BoardsPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
