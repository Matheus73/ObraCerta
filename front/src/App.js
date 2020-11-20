import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import PerfilUsuario from './pages/PerfilUsuario';
import UseTherms from '../pages/UseTherms';


class App extends Component {

  constructor() {
    super();

    this.state = {
      logged: "LOGGED",
      user: {}
    }
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <BrowserRouter>
          <Switch>
            <Route
              exact path="/"
              render={props => (
                <Home {...props} logged={this.state.logged}/>
              )}
            />
            <Route
              exact path="/PerfilUsuario"
              render={props => (
                <PerfilUsuario {...props} logged={this.state.logged}/>
              )}
            />
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/login" component={Login} />
            <Route path='/termosdeuso' component = {UseTherms}/>

          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
