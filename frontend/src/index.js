import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app'; // Import the main App component
import './index.css'; // Import optional global CSS styles

// Get the root DOM element from public/index.html
const rootElement = document.getElementById('root');

// Create a React root and render the App component
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
