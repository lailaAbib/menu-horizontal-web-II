  
import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom'

import './index.css';

import App from './componentes/App/App.js';

ReactDOM.render(
  <BrowserRouter>

    <App />

  </BrowserRouter>,

  document.getElementById('root')
);