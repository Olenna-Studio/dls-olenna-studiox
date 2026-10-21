import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import '@olenna/styles/css';
import { ThemeProvider } from '@olenna/react';
import { App } from './App';
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(ThemeProvider, { defaultTheme: "light", children: _jsx(App, {}) }) }));
//# sourceMappingURL=main.js.map