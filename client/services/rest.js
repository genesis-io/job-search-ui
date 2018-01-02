import { apiCall, actionApiCall } from './utils';

export const ctaBackground = 'https://s3-us-west-1.amazonaws.com/jobsearchhr/jobsearchimage2.jpg'


export const authSignup = (data, dispatch) => {
  const config = {
    url: 'api/auth/signup',
    method: 'POST',
    data,
  };
  return apiCall(config, dispatch);
};

export const authLogin = ({
  data, dispatch, successCB, message,
}) => {
  const networkRequestConfig = {
    url: 'api/auth/login',
    method: 'POST',
    data,
  };
  const config = {
    config: networkRequestConfig,
    dispatch,
    successCB,
    message,
  };
  return actionApiCall(config);
};
