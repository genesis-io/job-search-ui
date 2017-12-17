import { UPDATE_USER_PROFILE } from '../types/index';

export const updateUserProfile = user => ({
  type: UPDATE_USER_PROFILE,
  payload: user,
});
