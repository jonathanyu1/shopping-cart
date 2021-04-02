import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import CartItem from './CartItem';

const Cart = (props) => {
    
    const [cartItems, setCartItems] = useState([]);
    // const [subtotal, setSubtotal] = useState('');
    // const [cartItemsDuplicates, setCartItemsDuplicates] = useState([]);
    // const [updatedCartItems, setUpdatedCartItems] = useState([]);

    // const countDuplicates = () => {
    //     const tempCartItemsDuplicates = [];
    //     cartItems.forEach(function(i) { tempCartItemsDuplicates[i.id] = (tempCartItemsDuplicates[i.id]||0) + 1;});
    //     console.log(tempCartItemsDuplicates);
    //     setCartItemsDuplicates(tempCartItemsDuplicates);
    // }

    // const removeDuplicates = () => {
    //     // const tempCartItems = [...cartItems];
    //     const tempCartItems = cartItems.filter((cartItem, index)=>{
    //         return (cartItems.indexOf(cartItem)===index);
    //     });
    //     console.log(tempCartItems);
    // }

    // const calcSubtotal = () => {
    //     let tempSubtotal = 0;
    //     cartItems.forEach((cartItem)=>{
    //         tempSubtotal += (cartItem.price * cartItem.quantity);
    //     });
    //     setSubtotal(tempSubtotal);
    // }

    useEffect(()=>{
        console.log(props);
        setCartItems(props.cartItems);
        // calcSubtotal();
    },[]);

    useEffect(()=>{
        setCartItems(props.cartItems);
        console.log(cartItems);
        console.log(cartItems.length);
    },[props.cartItems]);

    // useEffect(()=>{
    //     calcSubtotal();
    // },[cartItems]);

    
    // add section for empty cart
    return (
        <div id='cartContainer'>
            <div id='cartTitle'>Shopping Cart</div>
                {cartItems.map(cartItem=>{
                    return (
                        <CartItem
                            key={cartItem.id}
                            cartItem={cartItem}
                            changeProductQuantity={props.changeProductQuantity}
                            removeProduct={props.removeProduct}
                        />
                    )
                })}
                <div id='cartTotalContainer'>
                    <div id='cartSubtotal'>Subtotal: {props.subtotal}</div>
                    <Link to='/'>Checkout</Link>
                </div>
        </div>
    )
}

export default Cart;