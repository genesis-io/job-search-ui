import Axios from 'axios';
import {
  requestInProgress,
  requestFailure,
  requestSuccess,
} from '../actions/networkActions';

const axios = Axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 9000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const apiCall = (config, dispatch) => {
  dispatch(requestInProgress(true));
  return axios.request(config)
    .then((res) => {
      dispatch(requestSuccess('succesful network request'));
      return res.data;
    })
    .catch((error) => {
      dispatch(requestFailure(error.message));
      throw new Error(error);
    });
};

export const actionApiCall = ({
  config, dispatch, successCB, message,
}) => {
  dispatch(requestInProgress(true));
  return axios.request(config)
    .then((res) => {
      dispatch(successCB(res.data));
      dispatch(requestSuccess(message));
    })
    .catch((error) => {
      dispatch(requestFailure(error.message));
      throw new Error(error);
    });
};

// export const extractToken = (token) => {
//   localStorage.setItem('token', token);
// }

