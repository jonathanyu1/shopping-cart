import React, {useState, useEffect} from 'react';
import './App.css';
import Routes from './Routes';
import Nav from './Components/Nav';
import {BrowserRouter} from 'react-router-dom';
import productData from './productData';

const App = () =>{

  const [cartItems, setCartItems] = useState([]);
  const [numCartItems, setNumCartItems] = useState(0);

  // keep track of cart, send to nav 

  const getProductById = (id) =>{
    return productData.find(product => product.id===id);
  }

  const changeProductQuantity = (id, amount) => {
    const tempCartItems = [...cartItems];
    tempCartItems.forEach((cartItem)=>{
      console.log(cartItem);
      console.log(cartItem.id);
      console.log(id);
      if (cartItem.id===id){
        cartItem.quantity += amount;
      }
    });
    setCartItems(tempCartItems);
  }

  const addProductToCart = (product) => {
    // if new product, add to cartItems
    if (cartItems.indexOf(product)===-1){
      setCartItems([...cartItems,product]);
    } else {
      // product already exists in cart, need to increment quantity by 1
      changeProductQuantity(product.id, 1);
    }
  }

  const getNumCartItems = () => {
    let totalItems = 0;
    cartItems.forEach((cartItem)=>{
      totalItems += cartItem.quantity;
    });
    setNumCartItems(totalItems);
  }

  useEffect(()=>{
    console.log(cartItems);
    console.log(cartItems.length);
    getNumCartItems();
  },[cartItems]);

  useEffect(()=>{
    console.log(productData);
  },[]);

  return (
    <BrowserRouter>
      <div id='siteContainer'>
          <Nav numCartItems={numCartItems}/>
          <Routes 
            getProductById={getProductById} 
            addProductToCart={addProductToCart}
            cartItems={cartItems}
            changeProductQuantity={changeProductQuantity}
          />
      </div>
    </BrowserRouter>
  )
}

export default App;
