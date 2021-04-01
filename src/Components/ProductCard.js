import React, { useEffect } from 'react';

const ProductCard = (props) => {

    useEffect(()=>{
        console.log(props);
        console.log(`../images/productImages/${props.imgName}`);
    },[]);

    return (
        <div className='productCardContainer'>
            <div className='productCardImage'>
                <img src={`../images/productImages/${props.imgName}`} alt={`${props.name} funko`}/>
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