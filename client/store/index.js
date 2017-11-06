import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise'
import thunk from 'redux-thunk';
import reducers from '../reducers/index';

const middleWare = [thunk, promise]

const store = createStore(reducers, ['initial', 'state'], applyMiddleware(...middleWare));

export default store;