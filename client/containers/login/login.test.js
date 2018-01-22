import 'raf/polyfill';
import React from 'react';
import { shallow } from 'enzyme';
import { createMockStore } from 'redux-test-utils';
import Login from './login';

let component;
const testData = {
  validEmail: 'validemail@gmail.com',
  validPassword: 'password',
  invalidEmail: 'notavalidemail',
  invalidPassword: 'notvalid36#>!',
}
const testState = {
  user: {},
};
const store = createMockStore(testState);
const context = {
  store,
};

describe('Login Component, /login', () => {
  const wrappedComponent = () => {
    if (!component) {
      component = shallow(<Login location={{ pathname: '/login' }} />, { context }).dive({ context });
    }
    return component;
  }

  beforeEach(() => {
    component = undefined;
  });

  test('should render login component', () => {
    const wrapper = wrappedComponent();
    expect(wrapper).toMatchSnapshot();
  });

  test('should display error when email invalid on click', () => {
    const wrapper = wrappedComponent();
    wrapper.setState({
      email: testData.invalidEmail,
      password: testData.validPassword,
    });
    const button = wrapper.find('.login-form-sign-in');
    button.simulate('click', { preventDefault() {} });
    expect(wrapper.state().isEmailError).toBeTruthy();
    expect(wrapper.find('.invalid-form-error')).toHaveLength(1);
  });

  test('should display error when password invalid on click', () => {
    const wrapper = wrappedComponent();
    wrapper.setState({
      email: testData.validEmail,
      password: testData.invalidPassword,
    });
    const button = wrapper.find('.login-form-sign-in');
    button.simulate('click', { preventDefault() {} });
    expect(wrapper.state().isPasswordError).toBeTruthy();
    expect(wrapper.find('.invalid-form-error')).toHaveLength(1);
  });

  test('should clear form if no validation errors', () => {
    // const wrapper = wrappedComponent();
    // wrapper.setState({
    //   email: testData.validEmail,
    //   password: testData.validPassword,
    // });
    // expect(wrapper.state().email).toBeTruthy();
    // expect(wrapper.state().password).toBeTruthy();
    // const button = wrapper.find('.login-form-sign-in');
    // button.simulate('click', { preventDefault() {} });
    // expect(wrapper.state().email).toBeFalsy();
    // expect(wrapper.state().password).toBeFalsy();
  });

  test('should display error when email invalid on blur', () => {
    const wrapper = wrappedComponent();
    wrapper.setState({
      email: testData.invalidEmail,
      password: testData.validPassword,
    });
    const input = wrapper.find('[type="email"]');
    input.simulate('blur');
    expect(wrapper.state().isEmailError).toBeTruthy();
    expect(wrapper.find('.invalid-form-error')).toHaveLength(1);
  });

  test('should dispaly error when password invalid on blur', () => {
    const wrapper = wrappedComponent();
    wrapper.setState({
      email: testData.validEmail,
      password: testData.invalidPassword,
    });
    const input = wrapper.find('[type="password"]');
    input.simulate('blur');
    expect(wrapper.state().isPasswordError).toBeTruthy();
    expect(wrapper.find('.invalid-form-error')).toHaveLength(1);
  });

  test('should render button with (Log in) text', () => {
    const wrapper = wrappedComponent();
    expect(wrapper.find('.login-form-sign-in').text()).toEqual(' Log In');
  });

});


describe('Login Component, /signup', () => {
  const wrappedComponent = () => {
    if (!component) {
      component = shallow(<Login location={{ pathname: '/signup' }} />, { context }).dive({ context });
    }
    return component;
  }

  beforeEach(() => {
    component = undefined;
  });

  test('should render signp component', () => {
    const wrapper = wrappedComponent();
    expect(wrapper).toMatchSnapshot();
  });

  test('should render (Sign up with us! text)', () => {
    const wrapper = wrappedComponent();
    expect(wrapper.find('.login-form-header').text()).toEqual('Sign up with us!');
  });

  test('should render button with Register text', () => {
    const wrapper = wrappedComponent();
    expect(wrapper.find('.login-form-sign-in').text()).toEqual(' Register');
  });
});
