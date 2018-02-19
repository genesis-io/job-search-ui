import {
  UPDATE_USER_PROFILE,
  AUTHENTICATE_USER,
  defaultUserState,
} from '../types/index';

export const userProfile = (state = defaultUserState, action) => {
  switch (action.type) {
    case UPDATE_USER_PROFILE:
      return {
        ...state,
        user: action.user,
      };
    default: return state;
  }
};
