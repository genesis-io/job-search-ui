import 'raf/polyfill';
import React from 'react';
import { createMockStore } from 'redux-test-utils';
import Login from './login';
import { mountWithStore } from '../../../config/testHelpers';

let wrapper;

beforeAll(() => {
  const testState = {
    user: {},
  }
  const store = createMockStore(testState)
  wrapper = mountWithStore(<Login location={'/login'} />, store);
})

test('render home component', () => {
  expect(wrapper).toMatchSnapshot();
});

test('it should render login button if url is jobsearch.com/login', () => {
  expect(wrapper.find('login-form-sign-in').text()).toEqual('Log In');
})

// test('it should render register button if url is jobsearch.com/signup', () => {
//   wrapper = mountWithStore(<Login location={'/signup'} />, store);
//   expect(wrapper.find('login-form-sign-in').text()).toEqual('Register');
// })