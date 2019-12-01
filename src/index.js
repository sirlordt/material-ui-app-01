/* jshint ignore:start */
import React from "react";
import ReactDOM from "react-dom";
//import * as serviceWorker from './serviceWorker';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import ThemeRed from './themes/ThemeRed';
//import { BrowserRouter } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';

import App from './App';
//import { Box } from "@material-ui/core";

ReactDOM.render(
  <ThemeProvider theme={ThemeRed}>
    <CssBaseline />
    <MemoryRouter>
      <App />
    </MemoryRouter>
  </ThemeProvider>
  ,
  document.getElementById("root")
);
/* jshint ignore:end */

/*
  <ThemeProvider theme={ThemeRed}>
{/ * CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. * /}
    <CssBaseline />
    {/ *}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    { * /}
    <MemoryRouter>
      <App />
    </MemoryRouter>
  </ThemeProvider>,

*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

