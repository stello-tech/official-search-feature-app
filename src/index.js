import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card';
import 'tachyons';
import { arrOfObj } from './User';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Card id={arrOfObj[0].id} 
          name={arrOfObj[0].name} 
          email={arrOfObj[0].email}/>
    <Card id={arrOfObj[1].id} 
          name={arrOfObj[1].name} 
          email={arrOfObj[1].email}/>
    <Card id={arrOfObj[2].id} 
          name={arrOfObj[2].name} 
          email={arrOfObj[2].email}/>
    <Card id={arrOfObj[3].id} 
          name={arrOfObj[3].name} 
          email={arrOfObj[3].email}/>
    <Card id={arrOfObj[4].id} 
          name={arrOfObj[4].name} 
          email={arrOfObj[4].email}/>
    <Card id={arrOfObj[5].id} 
          name={arrOfObj[5].name} 
          email={arrOfObj[5].email}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
