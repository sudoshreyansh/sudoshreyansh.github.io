import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header/Header';
import Body from './body/Body';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Body />
  </React.StrictMode>,
  document.getElementById('root')
);