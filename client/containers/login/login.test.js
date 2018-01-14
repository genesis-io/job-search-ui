import 'raf/polyfill';
import React from 'react';
import { createMockStore } from 'redux-test-utils';
import Login from './login';
import { mountWithStore } from '../../../config/testHelpers';

test('render home component', () => {
  const testState = {
    user: {},
  }
  const store = createMockStore(testState)
  const wrapper = mountWithStore(<Login location={'/login'} />, store);
  expect(wrapper).toMatchSnapshot();
});
