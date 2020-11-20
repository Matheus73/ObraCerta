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
      logged: "NOT_LOGGED",
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
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/login" component={Login} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
