import { UPDATE_USER_PROFILE } from '../types/index';

export const userProfile = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER_PROFILE:
      return {
        ...state,
        user: action.user,
      };
    default: return state;
  }
};
