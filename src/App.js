import React, {useState, useEffect} from 'react';
import './App.css';
import Routes from './Routes';
import Nav from './Components/Nav';
import {BrowserRouter} from 'react-router-dom';
import productData from './productData';

const App = () =>{

  const [cartItems, setCartItems] = useState([]);

  // keep track of cart, send to nav 

  const findProductById = (id) =>{
    return productData.find(product => product.id===id);
  }

  useEffect(()=>{
    console.log(productData);
  },[]);

  return (
    <BrowserRouter>
      <div id='siteContainer'>
          <Nav />
          <Routes findProductById={findProductById}/>
      </div>
    </BrowserRouter>
  )
}

export default App;
