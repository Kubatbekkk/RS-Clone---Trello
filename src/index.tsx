import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './reducers/index';


const rootEl = document.querySelector('#react-setup__root');
if (!rootEl) throw new Error('Cannot find react-setup__root');

const root = createRoot(rootEl);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
