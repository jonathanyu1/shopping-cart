import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = (props) => {

    let location = useLocation();
    const [textColor, setTextColor] = useState('white');

    useEffect(()=>{
        setTextColor(
            location.pathname === '/' ? 
            'white'
            :
            'black'
        )
    },[location])

    return (
            <div id='navContainer'>
                <nav className='nav'>
                    <div id='navHeaderContainer'>
                        <Link to='/' className={textColor==='white'?'navWhite':'navBlack'}>
                            <div id='navHeader'>Funko King</div>
                        </Link>
                    </div>
                    <ul className='navTabs'>
                        <Link to='/' className={textColor==='white'?'navWhite':'navBlack'}>
                            <li>Home</li>
                        </Link>
                        <Link to='/shop' className={textColor==='white'?'navWhite':'navBlack'}>
                            <li>Shop</li>
                        </Link>
                        <Link to='/cart' className={textColor==='white'?'navWhite':'navBlack'}>
                            <li id='navCartContainer'><span id='navCartIcon'className="material-icons">shopping_cart</span>({props.numCartItems})</li>
                        </Link>
                    </ul>
                </nav>
            </div>
    )

}

export default Nav;