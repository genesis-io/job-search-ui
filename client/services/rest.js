import axios from 'axios';

const localHost = 'http://localhost:3000';
const authUrl = '/api/auth';
const loginUrl = `${localHost}${authUrl}/login`;
const signUpUrl = `${localHost}${authUrl}/signup`;

export const authSignup = payload => axios.post(signUpUrl, payload);

export const authLogin = payload => axios.post(loginUrl, payload);
