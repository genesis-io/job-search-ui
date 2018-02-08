import * as networkActions from './networkActions';
import * as userProfileActions from './userProfile';
import * as types from '../types/index';

describe('network actions', () => {
  test('should create an action to update requestInProgress', () => {
    const { REQUEST_IN_PROGRESS } = types;
    const expectedAction = {
      type: REQUEST_IN_PROGRESS,
      inProgress: true,
      status: '',
      message: '',
    }
    expect(networkActions.requestInProgress(true)).toEqual(expectedAction);
    expectedAction.inProgress = true;
    expect(networkActions.requestInProgress(true)).toEqual(expectedAction);
  });

  test('should create an action to let store know request failed', () => {
    const { REQUEST_FAILURE } = types;
    const errorMessage = 'network request failed';
    const expectedAction = {
      type: REQUEST_FAILURE,
      inProgress: false,
      status: REQUEST_FAILURE,
      message: errorMessage,
    }
    expect(networkActions.requestFailure(errorMessage)).toEqual(expectedAction);
  });

  test('should create an action to let store know request was successful', () => {
    const { REQUEST_SUCCESS } = types;
    const successMessage = 'network request successful';
    const expectedAction = {
      type: REQUEST_SUCCESS,
      inProgress: false,
      status: REQUEST_SUCCESS,
      message: successMessage,
    }
    expect(networkActions.requestSuccess(successMessage)).toEqual(expectedAction);
  });
})

describe('user profile actions', () => {
  test('should create an action to update user profile', () => {
    const { UPDATE_USER_PROFILE } = types;
    const user = {
      id: 1,
      email: 'fakeuser@gmail.com',
    }
    const expectedAction = {
      type: UPDATE_USER_PROFILE,
      user,
    };
    expect(userProfileActions.updateUserProfile(user)).toEqual(expectedAction);
  });
});
