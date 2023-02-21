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
// import AppRoutes from './routes';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/board" element={<Board />} />
        </Routes>
      </Router>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
