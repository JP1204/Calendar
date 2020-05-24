import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import {ContextProvider} from "./ContextProvider";
import App from './App';

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <ContextProvider>
              <App />
          </ContextProvider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
