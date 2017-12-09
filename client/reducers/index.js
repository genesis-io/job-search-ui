import { combineReducers } from 'redux';

const RootReducer = () => combineReducers({
  state: (state = [], action) => state,
});

export default RootReducer;
