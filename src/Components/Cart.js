import React, {useState,useEffect} from 'react';

const Cart = (props) => {
    
    const [cartItems, setCartItems] = useState([]);
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

    useEffect(()=>{
        console.log(props);
        setCartItems(props.cartItems);
    },[]);

    useEffect(()=>{
        // countDuplicates();
        // removeDuplicates();
    },[cartItems]);

    // useEffect(()=>{
    //     console.log(cartItemsDuplicates);
    //     console.log(typeof(cartItemsDuplicates));
    //     console.log(Object.keys(cartItemsDuplicates));
    //     Object.keys(cartItemsDuplicates).forEach((cartItemsDuplicateKey)=>{
    //         console.log(cartItemsDuplicateKey);
    //         console.log(cartItemsDuplicates[cartItemsDuplicateKey]);
    //         // cartItemsDuplicates[cartItemsDuplicateKey] +=1;
    //         // console.log(cartItemsDuplicates[cartItemsDuplicateKey]);
    //     });
    // },[cartItemsDuplicates]);
    

    return (
        <div id='cartContainer'>
            {cartItems.map(cartItem=>{
                return(
                    <div className='cartCardContainer'>
                        <div className='cartCardImage'>
                            <img src={`../images/productImages/${cartItem.imgName}`} alt={`${cartItem.name} funko`}/>
                        </div>
                        <div className='cartCardName'>
                            {cartItem.name}
                        </div>
                        <div className='cartCardPrice'>
                            {cartItem.price}
                        </div>
                        <div>Quantity: {cartItem.quantity}</div>
                    </div>
                )
            })}
        </div>
    )

}

export default Cart;