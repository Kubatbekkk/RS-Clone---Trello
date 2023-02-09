import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Home, NotFoundPage, BoardsPage, LoginPage, SignUpPage,
} from './pages';
import { NavbarComponent } from './components';

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        {['/', '/home'].map((path) => (
          <Route
            path={path}
            element={<Home />}
          />
        ))}
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/boards' element={<BoardsPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
