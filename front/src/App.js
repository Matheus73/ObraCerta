import React, { Component } from 'react';
import GlobalStyle from './styles/global';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <>
        <GlobalStyle />
        <BrowserRouter>
        <Routes/>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
