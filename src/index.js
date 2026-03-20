import React from 'react';
import ReactDOM from 'react-dom/client';

// Import Bootstrap CSS, JS, and Icons
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Add this line
import 'bootstrap-icons/font/bootstrap-icons.css';

import './App.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
