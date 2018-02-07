import { UPDATE_USER_PROFILE, AUTHENTICATE_USER } from '../types/index';

export const userProfile = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER_PROFILE:
      return {
        ...state,
        user: action.user,
      };
    case AUTHENTICATE_USER:
      return {
        ...state,
        user: { ...state.user },
        isAuth: action.isAuth,
      };
    default: return state;
  }
};
