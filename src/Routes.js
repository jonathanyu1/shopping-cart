import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Cart from './Components/Cart';
import Error from './Components/Error';
import ProductPage from './Components/ProductPage';

const Routes = () =>{
    return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/shop' component={Shop} />
                <Route exact path='/cart' component={Cart} />
                <Route path='/shop/:id' component={ProductPage}/>
                <Route component={Error}/>
            </Switch>
    );
};

export default Routes;