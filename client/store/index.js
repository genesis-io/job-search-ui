import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import RootReducer from '../reducers/index';

const middleWare = [thunk, promise, logger];

const store = createStore(RootReducer, applyMiddleware(...middleWare));

export default store;
