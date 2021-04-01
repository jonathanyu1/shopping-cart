import React, {useState, useEffect} from 'react';
import './App.css';
import Routes from './Routes';
import Nav from './Components/Nav';
import {BrowserRouter} from 'react-router-dom';
import productData from './productData';

const App = () =>{

  const [cartItems, setCartItems] = useState([]);

  // keep track of cart, send to nav 

  const getProductById = (id) =>{
    return productData.find(product => product.id===id);
  }

  const addProductToCart = (product) => {
    setCartItems([...cartItems,product]);
  }

  useEffect(()=>{
    console.log(cartItems);
    console.log(cartItems.length);
  },[cartItems]);

  useEffect(()=>{
    console.log(productData);
  },[]);

  return (
    <BrowserRouter>
      <div id='siteContainer'>
          <Nav numCartItems={cartItems.length}/>
          <Routes 
            getProductById={getProductById} 
            addProductToCart={addProductToCart}
            cartItems={cartItems}
          />
      </div>
    </BrowserRouter>
  )
}

export default App;
