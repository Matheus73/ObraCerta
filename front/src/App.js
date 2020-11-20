import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';

class App extends Component {

  constructor() {
    super();

    this.state = {
      loggedIn: "NOT_LOGGED",
      user: {}
    };
  }

  handleLogin = user => {
    this.setState({
      loggedIn: "LOGGED",
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
              render={() => (
                <Home loggedIn={this.state.loggedIn}/>
              )}
            />
            <Route path="/cadastro" component={Cadastro} />
            <Route 
              path="/login"
              render={() => (
                <Login handleLogin={this.handleLogin}/>
              )}
            />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
