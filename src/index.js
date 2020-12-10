import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const TASKDATA = [
  { id: "todo-0", name: "tutti", completed: true, due: 'December 12, 2020 23:24:00', duration: 30 }
]

ReactDOM.render(
  <React.StrictMode>
    <App tasks={TASKDATA} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
