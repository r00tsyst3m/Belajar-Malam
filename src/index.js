require('file-loader?name=[name].[ext]!../public/index.html');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Nav from './module/Nav/Nav';
import reportWebVitals from './reportWebVitals';
// const express = require('express');
// import ReactDOMServer from 'react-dom/server';

// const RenderNow  = ReactDOMServer.renderToString(<App />);

ReactDOM.render(
  <React.StrictMode>
    <Nav />
  </React.StrictMode>
, document.getElementById('root'));

reportWebVitals();