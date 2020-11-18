import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Cadastro from '../pages/Cadastro';
import Home from '../pages/Home'

function Routes(){
    return(
        <Switch>
            <Route path="/" exact component = {Home}/>
            <Route path="/cadastro" component = {Cadastro}/>

        </Switch>
    )
}

export default Routes;
