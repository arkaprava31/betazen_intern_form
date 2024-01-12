import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppStateProvider } from './pages/form/Reducers/AppStateContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppStateProvider>
    <App />
  </AppStateProvider>
);
