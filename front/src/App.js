import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import GlobalStyle from './styles/global';
import PageDefault from './components/PageDefault';
import Routes from './routes'
// import Navbar from './components/Navbar';

function App() {
    return <>
      <GlobalStyle/>
      <BrowserRouter>
      <Routes />
      </BrowserRouter>
    </>
}

export default App;
