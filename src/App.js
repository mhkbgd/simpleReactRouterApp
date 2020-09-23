import React from 'react';
import { Button } from 'antd';
import './App.css';
import Nav from './Nav'
import Header from './Header'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Nav /> 
      </div>     
    </Router>
    
  );
}

export default App;
