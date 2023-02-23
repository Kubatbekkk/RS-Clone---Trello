import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import Board from './pages/Board';
import { dark } from './styles/theme';
import GlobalStyle from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Container from './components/Utils/Container';
import Register from './pages/Register';
// import AppRoutes from './routes';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <Router>
        <Navbar />
        <Sidebar />
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/board" element={<Board />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Container>
      </Router>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
