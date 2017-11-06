import React from 'react';
import ReactDOM from 'react-dom';
import { Provider }  from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './containers/home/home';
import store from './store/index';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={Home} />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

