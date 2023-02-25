import React from 'react';
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
// import AppRoutes from './routes';

function App() {
  return (
    <ThemeProvider theme={theme.light}>
      <BoardsProvider>
        <Router>
          <Navbar />
          <Sidebar />
          <Container>
            <Routes>
              <Route path='/' element={<Home />} />
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
}

export default App;
