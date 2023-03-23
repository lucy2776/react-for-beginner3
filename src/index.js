import React from 'react';
import ReactDOM from 'react-dom/client';
import ToDoList from './ToDoList';
import CoinTracker from './CoinTracker';
// import Movie from './Movie';
import Movie from './routes/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <ToDoList />
    <br />
    <br />
    <br />
    <hr />
    <br />
    <CoinTracker />
    <br />
    <br />
    <br />
    <hr />
    <br />
    <Movie />
  </div>
);
