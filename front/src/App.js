import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import GlobalStyle from './styles/global';

import Routes from './routes'
import Navbar from './components/Navbar';

function App() {
    return <>
      <GlobalStyle/>
      <Navbar/>
      <BrowserRouter>
      <Routes />
      </BrowserRouter>
    </>
}

export default App;
