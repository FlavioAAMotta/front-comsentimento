import React from 'react';
import Router from './routes/Router';
import GlobalState from './global/GlobalState'
import { GlobalStyle } from "./styled-app";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <GlobalState>
        <Router />
      </GlobalState>
    </>
  )
}

export default App;
