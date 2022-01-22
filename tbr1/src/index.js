import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from "react-router-dom"
import { MuiThemeProvider } from "@material-ui/core/styles"
import theme from "./themes/main"

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


