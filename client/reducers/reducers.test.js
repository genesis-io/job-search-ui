import { network } from '../reducers/networkReducer';
import { userProfile } from '../reducers/userProfileReducer';
import * as types from '../types/index';

describe('network reducers', () => {
  const {
    defaultNetworkState,
    REQUEST_IN_PROGRESS,
    REQUEST_FAILURE,
    REQUEST_SUCCESS,
  } = types;

  test('should return the initial state', () => {
    expect(network(undefined, {})).toEqual(defaultNetworkState);
  });

  test('should handle REQUEST_IN_PROGRESS', () => {
    const expectedState = {
      inProgress: true,
      status: '',
      message: '',
    };

    expect(network(defaultNetworkState, {
      type: REQUEST_IN_PROGRESS,
      inProgress: true,
    })).toEqual(expectedState);
  });

  test('should handle REQUEST_FAILURE', () => {
    const expectedState = {
      inProgress: false,
      message: 'network request failed',
      status: REQUEST_FAILURE,
    };

    expect(network(defaultNetworkState, {
      type: REQUEST_FAILURE,
      inProgress: false,
      message: 'network request failed',
      status: REQUEST_FAILURE,
    })).toEqual(expectedState);
  });

  test('should handle REQUEST_SUCCESS', () => {
    const expectedState = {
      inProgress: false,
      message: 'network request successful',
      status: REQUEST_SUCCESS,
    };

    expect(network(defaultNetworkState, {
      type: REQUEST_SUCCESS,
      inProgress: false,
      message: 'network request successful',
      status: REQUEST_SUCCESS,
    })).toEqual(expectedState);
  });
});

describe('user profile reducers', () => {
  const { UPDATE_USER_PROFILE, defaultUserState } = types;

  test('should return default state if undefined', () => {
    expect(userProfile(undefined, { })).toEqual(defaultUserState);
  })

  test('should handle UPDATE_USER_PROFILE', () => {
    const expectedState = {
      user: {
        email: 'user@gmail.com',
      },
    };
    expect(userProfile({}, {
      type: UPDATE_USER_PROFILE,
      user: {
        email: 'user@gmail.com',
      },
    })).toEqual(expectedState);
  });
})
