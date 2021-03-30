import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {


    return (
            <div id='navContainer'>
                <nav className='nav'>
                    <div id='navHeaderContainer'>
                        <Link to='/'>
                            <div id='navHeader'>Funko Pops</div>
                        </Link>
                    </div>
                    <ul className='navTabs'>
                        <Link to='/'>
                            <li>Home</li>
                        </Link>
                        <Link to='/shop'>
                            <li>Shop</li>
                        </Link>
                        <Link to='/cart'>
                            <li>Cart</li>
                        </Link>
                    </ul>
                </nav>
            </div>
    )

}

export default Nav;