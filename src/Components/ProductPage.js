import React, {useState, useEffect} from 'react';

const ProductPage = (props) => {

    useEffect(()=>{
        console.log(props.match);
        console.log(props);
        console.log(props.product);
    },[])

    return (
        <div id='productPageContainer'>
            Hello from Product Page: {props.product.name}
        </div>
    )

}

export default ProductPage;