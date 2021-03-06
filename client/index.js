import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/home/home';
import Login from './containers/login/login';
import store from './store/index';
import ErrorBoundary from './components/errorBoundaries/errorBoundaries';


ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Login} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </ErrorBoundary>
  , document.getElementById('root'),
);

