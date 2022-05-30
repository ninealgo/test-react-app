import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes';
import reportWebVitals from './reportWebVitals';

import "./stylesheet/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('reactapp'));
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
