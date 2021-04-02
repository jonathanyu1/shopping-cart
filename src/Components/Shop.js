import React, {useState,useEffect} from 'react';
import ProductCard from './ProductCard';
import productData from '../productData';
import {Link} from 'react-router-dom';

const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        setProducts(productData);
      },[]);

    return (
        <div id='shopContainer'>
            {products.map(product => {
                return (<Link to={`/shop/${product.id}`} key={product.id}>
                            <ProductCard 
                                key={product.id} 
                                id={product.id}
                                name={product.name}
                                imgName={product.imgName} 
                                price={product.price}
                                quantity={product.quantity}
                            />
                        </Link>)
            })}
        </div>
    )

}

export default Shop;