import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Cadastro from '../pages/Cadastro';
import Login from '../pages/Login';
import Listagem from '../pages/Listagem';

import TermosDeUsuario from '../pages/TermosDeUsuario';
import PerfilUsuario from '../pages/PerfilUsuario';
import RecuperarSenha from '../pages/RecuperarSenha';
import Sobre from '../pages/Sobre';
import LinkQuebrado from '../assets/link-quebrado.svg';
import Usuario from '../pages/Usuario';
import EditarPerfil from '../pages/EditarPerfil';


const Pagina404 = () => (<div>
    <img src={LinkQuebrado} alt="Link-Quebrado"/>
    <h1>404 Página não encontrada</h1>
    </div>);

class Routes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loggedIn: "",
            user: {}
        };
    }

    handleLogin = user => {
        this.setState({
            loggedIn: "LOGGED_IN",
            user: user
        });
    }

    componentDidMount = () => {
        this.setState({
            loggedIn: localStorage.getItem("loggedIn") || "NOT_LOGGED_IN",
            user: {
                name: localStorage.getItem("name"),
                telefone: localStorage.getItem("telefone"),
                email: localStorage.getItem("email")
            }
        })
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
                        exact path="/Listagem"
                        render={props => (
                            <Listagem {...props} loggedIn={this.state.loggedIn} />
                        )}
                    />
                    <Route
                        path="/cadastro"
                        render={props => (
                            <Cadastro {...props} handleLogin={this.handleLogin} />
                        )}
                    />
                    <Route
                        path="/PerfilUsuario"
                        render={props => (
                            <PerfilUsuario {...props} handleLogin={this.handleLogin} />
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
                            <TermosDeUsuario {...props} loggedIn={this.state.loggedIn} />
                        )}
                    />
                    <Route
                        path='/recuperarsenha'
                        render={props => (
                            <RecuperarSenha {...props} loggedIn={this.state.loggedIn} />
                        )}
                    />
                    <Route
                        path='/Usuario'
                        render={props => (
                            <Usuario {...props} loggedIn={this.state.loggedIn} />
                        )}
                    />
                     <Route
                        path='/sobre'
                        render={props => (
                            <Sobre {...props} loggedIn={this.state.loggedIn} />
                        )}
                    />

                     <Route component={Pagina404}/>


                    <Route
                        path='/editarperfil'
                        render={props => (
                            <EditarPerfil {...props}/>
                        )}
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;
