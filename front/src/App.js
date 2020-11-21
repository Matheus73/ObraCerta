import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();

    this.state = {
      loggedIn: "NOT_LOGGED_IN",
      user: {}
    };
  }

  handleLogin = user => {
    this.setState({
      loggedIn: "LOGGED_IN",
      user: user
    })
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
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
