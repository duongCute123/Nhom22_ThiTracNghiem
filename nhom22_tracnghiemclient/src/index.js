import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthenProvider } from './component/context/AuthenContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthenProvider>
      <App />
    </AuthenProvider>
  </React.StrictMode>
);