import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import CardList from './CardList';
import App from './App.js';
import 'tachyons';
import {arrOfObj} from './User';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); /* App is a component, first thing to render */
root.render(
  <React.StrictMode>
  <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
<div>
    <Card id={users[0].id} name={users[0].name} email={users[0].email} />
    <Card id={users[1].id} name={users[1].name} email={users[1].email}/>
    <Card id={users[2].id} name={users[2].name} email={users[2].email}/>
    <Card id={users[3].id} name={users[3].name} email={users[3].email}/>
</div>
*/