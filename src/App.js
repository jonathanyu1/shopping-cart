import React from 'react';
import './App.css';
import Routes from './Routes';
import Nav from './Components/Nav';
import {BrowserRouter} from 'react-router-dom';

const App = () =>{

  // keep track of cart, send to nav 

  return (
    <BrowserRouter>
      <div id='siteContainer'>    
          <Nav />
          <Routes />
      </div>
    </BrowserRouter>
  )
}

export default App;
