import { combineReducers } from 'redux';
import { userProfile } from '../reducers/userProfileReducer';

const RootReducer = combineReducers({
  userProfile,
});

export default RootReducer;
