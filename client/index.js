import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import Home from './containers/home/home';
import Login from './containers/login/login';
import Dashboard from './containers/dashboard/dashboard';
import configureStore from './store/index';
import ErrorBoundary from './components/errorBoundaries/errorBoundaries';
import { socialAuth } from './services/rest';

const { store, persistor } = configureStore();

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/:token" render={socialAuth}/>
            <Route path="*" render={() => <div>no routes matched</div>}/>
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </ErrorBoundary>
  , document.getElementById('root'),
);

