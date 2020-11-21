import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Cadastro from '../pages/Cadastro';
import Login from '../pages/Login';
import UseTherms from '../pages/UseTherms';
import PerfilUsuario from '../pages/PerfilUsuario';

class Routes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loggedIn: "NOT_LOGGED_IN",
            user: {}
        };
    }

    handleLogin = user => {
        this.setState({
            loggedIn: "LOGGED_IN",
            user: user
        });
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route
                        exact path="/"
                        render={props => (
                            <Home {...props} loggedIn={this.state.loggedIn} />
                        )}
                    />
                    <Route
                        path="/cadastro"
                        render={props => (
                            <Cadastro {...props} handleLogin={this.handleLogin} />
                        )}
                    />
                    <Route
                        path="/login"
                        render={props => (
                            <Login {...props} handleLogin={this.handleLogin} />
                        )}
                    />
                    <Route
                        path='/PerfilUsuario'
                        render={props => (
                            <PerfilUsuario {...props} loggedIn={this.state.loggedIn} />
                        )}
                    />
                    <Route
                        path='/termosdeuso'
                        render={props => (
                            <UseTherms {...props} loggedIn={this.state.loggedIn} />
                        )}
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;
