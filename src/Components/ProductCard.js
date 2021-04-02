import React from 'react';

const ProductCard = (props) => {

    return (
        <div className='productCardContainer'>
            <div className='productCardImage'>
                {/* <img src={`../images/productImages/${props.imgName}`} alt={`${props.name} funko`}/> */}
                <img src={`https://raw.githubusercontent.com/jonathanyu1/shopping-cart-imgs/main/${props.imgName}`} alt={`${props.name} funko`}/>
            </div>
            <div className='productCardName'>
                {props.name}
            </div>
            <div className='productCardPrice'>
                {props.price}
            </div>
        </div>
    )

}

export default ProductCard;