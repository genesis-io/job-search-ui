import React from 'react';
import ReactDOM from 'react-dom';
import { Provider }  from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './containers/home/home';

ReactDOM.render(
  <Provider>
    <BrowserRouter>
      <Route path="/" component={Home} />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

