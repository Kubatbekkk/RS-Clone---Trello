import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import Board from './pages/Board';
import { theme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Container from './components/Utils/Container';
import Register from './pages/Register';
import Login from './pages/Login';
import BoardsProvider from './contexts/boardsContext';
import Welcome from './pages/Welcome';
// import AppRoutes from './routes';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? JSON.parse(storedTheme) : true;
  });

  const handleThemeSwitch = () => {
    const newIsDarkTheme = !isDarkTheme;
    setIsDarkTheme(newIsDarkTheme);
    localStorage.setItem('theme', JSON.stringify(newIsDarkTheme));
  };
  return (
    <ThemeProvider theme={isDarkTheme ? theme.dark : theme.light}>
      <BoardsProvider>
        <Router>
          <Navbar isDarkTheme={isDarkTheme} handleThemeSwitch={handleThemeSwitch} />
          <Sidebar />
          <Container>
            <Routes>
              <Route path='/welcome' element={<Welcome />} />
              <Route path='/boards' element={<Home />} />
              <Route path="/board/:id" element={<Board />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Container>
        </Router>
        <GlobalStyle />
      </BoardsProvider>
    </ThemeProvider>
  );
};

export default App;
