import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import CartItem from './CartItem';

const Cart = (props) => {
    
    const [cartItems, setCartItems] = useState([]);

    useEffect(()=>{
        setCartItems(props.cartItems);
    },[]);

    useEffect(()=>{
        setCartItems(props.cartItems);
    },[props.cartItems]);

    return (
        <div id='cartContainer'>
            {cartItems.length>0 ? 
                <React.Fragment>
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
                </React.Fragment>
                : 
                <div id='cartEmptyContainer'>
                    <div id='cartEmptyMessage'>Your cart is empty.</div>
                    <span className="material-icons">shopping_bag</span>
                </div> 
            }
            
        </div>
    )
}

export default Cart;