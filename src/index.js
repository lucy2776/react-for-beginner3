import React from 'react';
import ReactDOM from 'react-dom/client';

// import ToDoList from './ToDoList';
// import CoinTracker from './CoinTracker';
import Movie from './Movie.js';

import 'bootstrap/dist/css/bootstrap.css';
import './css/index.css'

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