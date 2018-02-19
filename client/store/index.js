import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import RootReducer from '../reducers/index';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedRootReducer = persistReducer(persistConfig, RootReducer);
const middleWare = [thunk, promise, logger];

const store = createStore(persistedRootReducer, applyMiddleware(...middleWare));
const persistor = persistStore(store);

export default () => ({
  store,
  persistor,
});
