import React from 'react';
import ReactDOM from 'react-dom/client';

// import ToDoList from './ToDoList';
// import CoinTracker from './CoinTracker';
import Movie from './Movie.js';

import 'bootstrap/dist/css/bootstrap.css';
import './css/index.css'


const express = require('express');
const app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Movie />

    {/* <ToDoList /> */}
    {/* <CoinTracker /> */}
  </div >
);

// package.jon
// script 실행 -> 웹사이트의 production ready code(코드 압축, 최적화)




