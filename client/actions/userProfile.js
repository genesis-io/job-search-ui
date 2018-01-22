import { UPDATE_USER_PROFILE } from '../types/index';

export const updateUserProfile = user => {
  console.log(user);
  return {
    type: UPDATE_USER_PROFILE,
    user,
  }
};
