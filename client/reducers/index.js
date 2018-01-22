import { combineReducers } from 'redux';
import { userProfile } from '../reducers/userProfileReducer';
import { network } from '../reducers/networkReducer';

const RootReducer = combineReducers({
  userProfile,
  network,
});

export default RootReducer;
