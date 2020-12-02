import React, { Component } from 'react';
import GlobalStyle from './styles/global';
import Routes from './routes';

class App extends Component {

  render() {
    return (
      <>
        <GlobalStyle />
        <Routes/>
      </>
    );
  }
}

export default App;
