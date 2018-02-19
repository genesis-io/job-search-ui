import {
  UPDATE_USER_PROFILE,
  AUTHENTICATE_USER,
} from '../types/index';

export const updateUserProfile = user => ({
  type: UPDATE_USER_PROFILE,
  user,
});
