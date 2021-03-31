import React, {useState, useEffect} from 'react';
import './App.css';
import Routes from './Routes';
import Nav from './Components/Nav';
import {BrowserRouter} from 'react-router-dom';
import productData from './productData';

const App = () =>{

  const [cartItems, setCartItems] = useState([]);

  // keep track of cart, send to nav 

  useEffect(()=>{
    console.log(productData);
  },[]);

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
