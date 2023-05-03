import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { HashRouter } from 'react-router-dom';

try {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <HashRouter basename="/seguro">
      <App />
    </HashRouter>,
  );
} catch (error) {
  console.log(error);
}
