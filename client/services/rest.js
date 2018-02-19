import React from 'react';
import { Redirect } from 'react-router-dom';
import { apiCall } from './utils';

export const authSignup = (data, dispatch) => {
  const config = {
    url: 'api/auth/signup',
    method: 'POST',
    data,
  };
  return apiCall(config, dispatch);
};

export const authLogin = (data, dispatch) => {
  const config = {
    url: 'api/auth/login',
    method: 'POST',
    data,
  };
  return apiCall(config, dispatch);
};

export const socialAuth = ({ match }) => {
  const { params } = match;
  localStorage.setItem('accessToken', params.token);
  return (
    <Redirect to="/dashboard" />
  );
}
