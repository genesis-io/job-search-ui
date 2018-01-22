import {
  REQUEST_IN_PROGRESS,
  REQUEST_FAILURE,
  REQUEST_SUCCESS,
  defaultNetworkState,
} from '../types/index';

export const network = (state = defaultNetworkState, action) => {
  switch (action.type) {
    case REQUEST_IN_PROGRESS:
      return {
        ...state,
        inProgress: action.inProgress,
      };
    case REQUEST_FAILURE:
      return {
        ...state,
        status: action.status,
        inProgress: action.inProgress,
        message: action.message,
      };
    case REQUEST_SUCCESS:
      return {
        ...state,
        status: action.status,
        inProgress: action.inProgress,
        message: action.message,
      };
    default: return state;
  }
};
