import React, { Component, Fragment } from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppRoute from './routes/AppRoute';

// memasukkan react-route 
export class App extends Component {
  render() {
    return (
      <Fragment>
          <BrowserRouter>
            <AppRoute />
          </BrowserRouter>
      </Fragment>
    )
  }
}

export default App