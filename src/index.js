import React from 'react';
import ReactDOM from 'react-dom/client';
// import ToDoList from './ToDoList';
// import CoinTracker from './CoinTracker';
import Movie from './Movie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {/* <ToDoList /> */}
    {/* <CoinTracker /> */}
    <h1>Hello</h1>
    <Movie />
  </div>
);

// package.jon
// script 실행 -> 웹사이트의 production ready code(코드 압축, 최적화)