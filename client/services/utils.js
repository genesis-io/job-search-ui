import Axios from 'axios';
import jwt from 'jsonwebtoken';
import {
  requestInProgress,
  requestFailure,
  requestSuccess,
} from '../actions/networkActions';
import configuration from '../../config/config';


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

export const isTokenAuth = token => jwt.verify(token, configuration.JWT_SECRET, (err) => {
  if (err) {
    return false;
  }
  return true;
});

