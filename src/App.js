import React, {useState, useEffect} from 'react';
import './App.css';
import Routes from './Routes';
import Nav from './Components/Nav';
import {HashRouter} from 'react-router-dom';
import productData from './productData';

const App = () =>{

  const [cartItems, setCartItems] = useState([]);
  const [numCartItems, setNumCartItems] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  const getProductById = (id) =>{
    return productData.find(product => product.id===id);
  }

  const changeProductQuantity = (id, newQuantity) => {
    const tempCartItems = [...cartItems];
    tempCartItems.forEach((cartItem)=>{
      console.log(cartItem);
      console.log(cartItem.id);
      console.log(id);
      if (cartItem.id===id){
        if (Number(newQuantity)<=0){
          // prevents input quantity from being 0 or less
          newQuantity=1;
        }
        cartItem.quantity = Number(newQuantity);
      }
    });
    setCartItems(tempCartItems);
  }

  const addProductToCart = (product) => {
    // if new product, add to cartItems
    if (cartItems.indexOf(product)===-1){
      product.quantity=1;
      setCartItems([...cartItems,product]);
    } else {
      // product already exists in cart, need to increment quantity by 1
      changeProductQuantity(product.id, product.quantity+1);
    }
  }

  const removeProduct = (id) => {
    setCartItems(cartItems=>cartItems.filter(cartItem => cartItem.id !== id));
  }

  const getNumCartItems = () => {
    let totalItems = 0;
    cartItems.forEach((cartItem)=>{
      totalItems += cartItem.quantity;
    });
    setNumCartItems(totalItems);
  }

  const calcSubtotal = () => {
    let tempSubtotal = 0;
    cartItems.forEach((cartItem)=>{
        tempSubtotal += (cartItem.price * cartItem.quantity);
    });
    setSubtotal(tempSubtotal.toFixed(2));
}

  useEffect(()=>{
    getNumCartItems();
    calcSubtotal();
  },[cartItems]);

  return (
    <HashRouter basename='/'>
      <div id='siteContainer'>
          <Nav numCartItems={numCartItems}/>
          <Routes 
            getProductById={getProductById} 
            addProductToCart={addProductToCart}
            removeProduct={removeProduct}
            cartItems={cartItems}
            changeProductQuantity={changeProductQuantity}
            subtotal={subtotal}
          />
      </div>
    </HashRouter>
  )
}

export default App;
