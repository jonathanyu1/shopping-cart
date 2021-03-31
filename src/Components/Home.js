import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {


    return (
        <div id='homeContainer'>
            <div id='homeBackground'>
            </div>
            <div id='homeMessageContainer'>
                <h1>Limited Edition Funko Pops</h1>
                <h3>Now available with free shipping.</h3>
                <Link to='/shop' className='homeShopLink'>
                    Shop Now
                </Link>
            </div>
        </div>
    )

}

export default Home;