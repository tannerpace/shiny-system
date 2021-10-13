import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HideAppBar from './Components/HideAppBar'



ReactDOM.render(
  <React.StrictMode>
    <HideAppBar />
  </React.StrictMode>,
  document.getElementById('root')
);

