import React from 'react';
import 'raf/polyfill';
import { createMockStore } from 'redux-test-utils';
import { shallow } from 'enzyme';
import { createMemoryHistory } from 'history';

import Dashboard from '../../containers/dashboard/dashboard';

let component;
const testState = {
  userProfile: {
    user: {},
    isAuth: true,
  },
};
const store = createMockStore(testState);
const context = {
  store,
};

const wrappedComponent = () => {
  if (!component) {
    const history = createMemoryHistory('/');
    component = shallow(<Dashboard history={history} />, { context }).dive({ context });
  }
  return component;
}

beforeEach(() => {
  component = undefined;
});

test('should render wrapped component', () => {
  const wrapper = wrappedComponent();
  expect(wrapper).toMatchSnapshot();
});
