import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Cadastro from '../pages/Cadastro';
import Home from '../pages/Home';
import Login from '../pages/Login';

function Routes(){
    return(
        <Switch>
            <Route path="/" exact component = {Home}/>
            <Route path="/cadastro" component = {Cadastro}/>
            <Route path="/cadastro" component = {Cadastro}/>
            <Route path="/login" component = {Login}/>

        </Switch>
    )
}

export default Routes;
