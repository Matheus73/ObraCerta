import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import ResetStyle from './styles/reset';
import GlobalStyle from './styles/global';

import Routes from './routes'

function App() {
    return <>
      <ResetStyle/>
      <GlobalStyle/>
      <BrowserRouter>
      <Routes />
      </BrowserRouter>
    </>
}

export default App;
