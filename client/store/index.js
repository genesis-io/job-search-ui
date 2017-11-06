import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise'
import thunk from 'redux-thunk';

const middleWare = [thunk, promise]

const store = createStore(  ,['initial', 'state'], applyMiddleware(...middleWare));

export default store;