/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Home, NotFoundPage, BoardsPage, LoginPage,
} from './pages';
import { Navbar } from './components';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {['/', '/home'].map((path) => (
          <Route
            path={path}
            element={<Home />}
          />
        ))}
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/boards' element={<BoardsPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
