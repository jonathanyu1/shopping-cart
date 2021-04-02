import React, {useState,useEffect} from 'react';

const CartItem = (props) =>{
    const [cartItem, setCartItem] = useState([]);

    useEffect(()=>{
        setCartItem(props.cartItem);
    },[]);

    const onChange = (e)=>{
        props.changeProductQuantity(cartItem.id,e.target.value);
    }

    return(
        <div className='cartCardContainer'>
            <div className='cartCardImage'>
                {/* <img src={`../images/productImages/${cartItem.imgName}`} alt={`${cartItem.name} funko`}/> */}
                <img src={`https://raw.githubusercontent.com/jonathanyu1/shopping-cart-imgs/main/${cartItem.imgName}`} alt={`${cartItem.name} funko`}/>
            </div>
            <div className='cartCardDetails'>
                <div className='cartCardName'>
                    {cartItem.name}
                </div>
                <div className='cartCardPrice'>
                    {cartItem.price}
                </div>
                <div id='cartCardQuantityContainer'>
                    <label htmlFor='quantity'>Quantity: </label>
                    <input 
                        type='number'
                        name='quantity'
                        className='cartCardQuantity'
                        min='1'
                        max='99'
                        value={cartItem.quantity || '1'}
                        onChange={onChange}
                    />
                </div>
                <button
                    className='btnRemoveItem'
                    onClick={()=>props.removeProduct(cartItem.id)}
                >Remove item
                </button>
            </div>
        </div>
    )

}

export default CartItem;