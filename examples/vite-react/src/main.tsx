import React from 'react';
import ReactDOM from 'react-dom/client';
import '@olenna/styles/css';
import { ThemeProvider } from '@olenna/react';
import { App } from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light">
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
