import {
  REQUEST_IN_PROGRESS,
  REQUEST_FAILURE,
  REQUEST_SUCCESS,
} from '../types/index';


export const requestInProgress = inProgress => ({
  type: REQUEST_IN_PROGRESS,
  inProgress,
  status: '',
  message: '',
});

export const requestFailure = error => ({
  type: REQUEST_FAILURE,
  inProgress: false,
  status: REQUEST_FAILURE,
  message: error,
})

export const requestSuccess = success => ({
  type: REQUEST_SUCCESS,
  inProgress: false,
  status: REQUEST_SUCCESS,
  message: success,
})
