import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/miniReset.css';
import './index.css';
import App from './App';
import './fonts/font.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
