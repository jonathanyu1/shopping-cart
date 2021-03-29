import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App';
import About from './About';

const Routes = () =>{
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/About' component={About} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;