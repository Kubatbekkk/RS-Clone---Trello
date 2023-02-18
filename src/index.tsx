import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootEl = document.querySelector('#react-setup__root');
if (!rootEl) throw new Error('Cannot find react-setup__root');

// const root = createRoot(rootEl);

ReactDOM.render(
  <App />,
  rootEl,
);
