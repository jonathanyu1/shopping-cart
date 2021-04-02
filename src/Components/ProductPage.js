import React from 'react';
import {Link} from 'react-router-dom';

const ProductPage = (props) => {

    return (
        <div id='productPageContainer'>
            <img src={`https://raw.githubusercontent.com/jonathanyu1/shopping-cart-imgs/main/${props.product.imgName}`} alt={`${props.product.name} funko`} className='productPageImage'/>
            {/* <img src={`../images/productImages/${props.product.imgName}`} alt={`${props.product.name} funko`} className='productPageImage'/> */}
            <div className='productPageDetails'>
                <div className='productPageCardName'>
                    {props.product.name}
                </div>
                <div className='productPageCardPrice'>
                    ${props.product.price}
                </div>
                <button 
                    className='btnAddCart' 
                    onClick={()=>props.addProductToCart(props.product)}
                >Add to cart
                </button>
                <Link to='/cart' className='cartLink'>Go to Checkout</Link>
            </div>
        </div>
    )

}

export default ProductPage;