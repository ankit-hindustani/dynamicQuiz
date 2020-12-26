import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header'; 
import { BrowserRouter } from 'react-router-dom';
import About from "./components/About";
import {Switch, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <BrowserRouter>
     <Header />
      
      <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/About" component={About}/>
  </Switch>
    </BrowserRouter> ,
   

  document.getElementById('root')
);

