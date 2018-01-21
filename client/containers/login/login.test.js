import 'raf/polyfill';
import React from 'react';
import { createMockStore } from 'redux-test-utils';
import Login from './login';
import { mountWithStore } from '../../../config/testHelpers';

let wrapper;
let store;

beforeAll(() => {
  const testState = {
    user: {},
  };
  store = createMockStore(testState);
  wrapper = mountWithStore(<Login location={{ pathname: '/login' }} />, store);
});

describe('Login Component, /login', () => {
  test('render home component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render login button', () => {
    expect(wrapper.find('.login-form-sign-in').text()).toEqual(' Log In');
  });

  test('should let user know if email is not valid', () => {
    // wrapper.setState({
    //   email: 'notavalidemail',
    //   password: 'password',
    // });
    // wrapper.find('login-form-sign-in').simulate('click');
    // expect(wrapper.find('error-input')).toHaveLength(1);
  });
});
